"use client";

import { useEffect, useState } from "react";
import { fetchGame, fetchPlayer } from "@/app/api/apiFinance";
import { Game } from "../interface/Game";
import { PlayerInfo } from "../interface/PlayerInfo";
import { useSearchParams } from "next/navigation";
import { Sidebar } from "../widgets/layout";
import CheckHistoricalOrder from "./checkhistorical";

export const PageHistoricalFetched: React.FC = () => {
    const [game, setGame] = useState<Game | null>(null);
    const [player, setPlayer] = useState<PlayerInfo | null>(null);
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerID = searchParams.get("playerID");
                const gameID = searchParams.get("gameID");

                if (playerID) {
                    const fetchedPlayer = await fetchPlayer(playerID);
                    setPlayer(fetchedPlayer);
                }

                if (gameID) {
                    const fetchedGame = await fetchGame(gameID);
                    setGame(fetchedGame);
                }

                setLoading(false); // Make sure to set loading to false even if there's an error
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();

    }, []); // Empty dependency array to run once on mount


    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator
    }

        
    return (
        <>
         <div className="min-h-screen bg-blue-gray-50/50 flex">
        <div className="w-1/4">

          <Sidebar player={player} game={game} />
        </div>                
        <CheckHistoricalOrder player={player} game={game} />
        </div>
        </>
    );
}

export default PageHistoricalFetched;
