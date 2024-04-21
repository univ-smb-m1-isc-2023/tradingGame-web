"use client";

import { fetchPlayer, fetchGame } from "@/app/api/apiFinance";
import { useEffect, useState } from "react";
import { Sidebar } from "../widgets/layout";
import SymbolList from "./list"
import { useSearchParams } from "next/navigation";
import { Game } from "../interface/Game";
import { PlayerInfo } from "../interface/PlayerInfo";

export function ActionsDetails() {
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
  
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50 flex">
        <div className="w-1/4">

          <Sidebar player={MyPlayer} game={MyGame} />
        </div>
          <SymbolList player={MyPlayer} game={MyGame}/>

     
      </div>
    </>
  );
}


export default ActionsDetails;
