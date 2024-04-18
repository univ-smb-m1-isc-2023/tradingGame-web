"use client";

import GameTable from "./table";
import ImageBackTop from "./image"
import { useEffect, useState } from "react";
import { PlayerInfo } from "../game/interface/PlayerInfo";
import { useSearchParams } from "next/navigation";
import { fetchPlayer } from "../api/apiFinance";

export default function gamelist() {

  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null); // Set initial value as null
  const searchParams = useSearchParams();

  
  useEffect(() => {
    const playerID = searchParams.get("playerID");

      const fetchPlayerInfo = async () => {
          try {
            
            if (playerID) { // Check if playerID is available
            const response = await fetchPlayer(playerID);
            console.log(response)
            if (!response.ok) {
                  throw new Error('Failed to fetch player info');
              }
            
              const data = await response.json();
              setPlayerInfo(data); // Set playerInfo state
            }
          } catch (error) {
              console.error('Error fetching player info:', error);
          }
      };

      fetchPlayerInfo();
  }, []);

  // Render the GameTable component only when playerInfo is available
  return (
      <>
          <ImageBackTop />
          {playerInfo && <GameTable playerInfo={playerInfo} />}
      </>
  );
}