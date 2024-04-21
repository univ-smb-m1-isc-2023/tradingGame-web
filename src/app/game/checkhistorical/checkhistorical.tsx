"use client";

import React, { useEffect, useState } from "react";
import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { ordersOverviewHistoricalData } from "../data";
import { Game } from "../interface/Game";
import { PlayerInfo } from "../interface/PlayerInfo";

interface CheckOrderProps {
    game: Game | null;
    player: PlayerInfo | null;
}

const CheckHistoricalOrder: React.FC<CheckOrderProps> = ({ game, player }) => {
    const [loading, setLoading] = useState(true);
    const [ordersOverviewData, setOrdersOverviewData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (game && player) {
                    const dataPendingOrders = await ordersOverviewHistoricalData(game.id.toLocaleString(), player);
                    console.log(dataPendingOrders)
                    setOrdersOverviewData(dataPendingOrders);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Make sure to set loading to false even if there's an error
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator
    }

    return (
        <CardBody className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
<h1 style={{ margin: '0 auto', width: 'fit-content', fontSize: '2rem' }}>MON HISTORIQUE</h1>            <table className="w-full">
                <thead>
                    <tr className="border-b">
                         <th className="text-left py-3 px-4"></th>

                        <th className="text-left py-3 px-4">TITLE</th>
                        <th className="text-left py-3 px-4">DATE</th>
                        <th className="text-left py-3 px-4">TYPE</th>
                        <th className="text-left py-3 px-4">STATUS</th>
                   </tr>
                </thead>
                <tbody>
                    {ordersOverviewData && ordersOverviewData.length > 0 ? (
                        ordersOverviewData.map(({ icon, status, color, type, date, title, value }, key) => (
                            <tr key={key} className="border-b">
                                <td className="py-3 px-4">{React.createElement(icon, {
                                    className: `!w-5 !h-5 ${color}`,
                                })}</td>
                                <td className="py-3 px-4">{title}</td>
                                <td className="py-3 px-4">{date}</td>
                                <td className="py-3 px-4">{type}</td>
                                <td className="py-3 px-4">{status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="py-3 px-4">--Aucun ordre de cette date--</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </CardBody>
    );
};

export default CheckHistoricalOrder;



