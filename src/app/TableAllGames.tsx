import React, { useState, useEffect } from "react";
import { membersGameData } from "./game/data";
import { fetchAllGames } from "./api/apiFinance";
import { Card, CardBody, CardHeader, Select, Typography } from "@material-tailwind/react";
import { TrophyIcon } from "@heroicons/react/24/solid";

interface MemberGameData {
    name: string;
    rank: number;
    budget: number;
}

export const TableAllGames: React.FC = () => {
    const [membersGames, setMembersGames] = useState<MemberGameData[][]>([]);
    const [membersGame, setMembersGame] = useState<MemberGameData[]>([]);
    const [selectedGameId, setSelectedGameId] = useState<string>('0');

    const handleGameSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const gameId = event.target.value;
        setSelectedGameId(gameId);
        setMembersGame(membersGames[parseInt(gameId)]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const games = await fetchAllGames();
                const dataMembers: MemberGameData[][] = [];
                console.log(games)
                for (let i = 0; i < games.length; i++) {
                    const game = games[i];
                    const membersData = await membersGameData(game);
                    dataMembers.push(membersData);
                    console.log(dataMembers)

                    setMembersGame(dataMembers[0])
                }

                setMembersGames(dataMembers);
            } catch (error) {
                console.error("Error fetching members game data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <TrophyIcon className="h-4 w-4 text-blue-gray-200" />
                <Typography variant="h6" color="blue-gray" className="flex items-center gap-1 mb-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Classement
                </Typography>
                {membersGames != null && (
                    <form className="max-w-sm mx-auto">
                        <label htmlFor="countries_multiple" className="flex items-center gap-1 font-normal text-blue-gray-600 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <strong>Choisir la partie</strong>
                        </label>
                        <select
                            multiple
                            id="countries_multiple"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={selectedGameId}
                            onChange={handleGameSelect}
                        >
                            {membersGames.map((game, index) => (
                                <option key={index} value={index.toString()}>
                                    {index}
                                </option>
                            ))}
                        </select>
                    </form>
                )}
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {["Members", "Money", "Rank"].map((el, index) => (
                                <th key={index} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                    <Typography variant="small" className="text-[11px] font-medium uppercase text-blue-gray-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {el}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {membersGame.map(({ name, rank, budget }, key) => (
                            <tr key={key}>
                                <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                                    <div className="flex items-center gap-4">
                                        <Typography variant="small" color="blue-gray" className="font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {name}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                                    <Typography variant="small" className="text-xs font-medium text-blue-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {budget}
                                    </Typography>
                                </td>
                                <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                                    <div className="w-10/12">
                                        <Typography variant="small" className="text-xs font-medium text-blue-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {rank}
                                        </Typography>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
};
