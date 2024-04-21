"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPlayer, fetchGame } from "../api/apiFinance";
import Dashboard from "./dashboard";
import { Game } from "./interface/Game";
import { PlayerInfo } from "./interface/PlayerInfo";
import { Sidebar } from "./widgets/layout";

export function DashBoardFetch() {
    const searchParams = useSearchParams();
    const [MyGame, setGame] = useState<Game | null>(null);
    const [MyPlayer, setPlayer] = useState<PlayerInfo | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const playerID = searchParams.get("playerID");
        const gameID = searchParams.get("gameID");
  
        try {
          if (playerID != null) {
            const playerResponse = await fetchPlayer(playerID);
            setPlayer(playerResponse);
          }
  
          if (gameID != null) {
            const gameResponse = await fetchGame(gameID);
            setGame(gameResponse);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [searchParams]);
  
    if (MyPlayer === null || MyGame === null) {
      return <p>Loading...</p>; // Render a loading indicator until data is fetched
    }
  
    return (
      <>
        <div className="min-h-screen bg-blue-gray-50/50 h-full  flex">
          <div className="w-1/4">
            <Sidebar player={MyPlayer} game={MyGame} />
          </div>
          
          <div className="w-3/4 flex flex-col justify-center items-center">
            <Dashboard player={MyPlayer} game={MyGame} />
          </div>
        </div>
      </>
    );
  }
  
  export default DashBoardFetch;
  