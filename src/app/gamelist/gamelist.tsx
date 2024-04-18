"use client";

import GameTable from "./table";
import ImageBackTop from "./image";
import { Suspense, useEffect, useState } from "react";
import { PlayerInfo } from "../game/interface/PlayerInfo";
import { useSearchParams } from "next/navigation";
import { fetchPlayer } from "../api/apiFinance";

export default function Gamelist() {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null); // Set initial value as null
  const searchParams = useSearchParams();

  useEffect(() => {
    const playerID = searchParams.get("playerID");
    console.log("playerID",playerID)
    const fetchPlayerInfo = async () => {
      try {
        if (playerID!=null) { // Check if playerID is available
          const response = await fetchPlayer(playerID);
          setPlayerInfo(response); // Set playerInfo state
        }
      } catch (error) {
        console.error('Error fetching player info:', error);
      }
    };

    fetchPlayerInfo();
  }, [searchParams]); // Add searchParams as a dependency to useEffect

  // Render the GameTable component only when playerInfo is available
  return (
      <>
        <ImageBackTop />
        {playerInfo && <GameTable playerInfo={playerInfo} />}
      </>
  );
}
