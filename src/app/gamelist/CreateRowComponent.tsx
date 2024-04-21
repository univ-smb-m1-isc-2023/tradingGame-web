"use client"

import React, { useEffect, useState } from 'react';
import { Game } from '../game/interface/Game';
import CreatedGamesRow from './CreateRow';
import { fetchGame } from '../api/apiFinance';

interface GameRowComponentProps {
    idGame: number;
    idPlayer : number;
  }
  
  const GameRowComponent: React.FC<GameRowComponentProps> = ({ idGame, idPlayer}) => {
    const [gameInfo, setGameInfo] = useState<Game | null>(null); // Set initial value as null
  
  
    useEffect(() => {
      const fetchGameInfo = async () => {
        try {
          const gameInfoData = await fetchGame(idGame.toLocaleString()); // Assuming fetchGame is an async function that fetches game info
          setGameInfo(gameInfoData); // Set GameInfo state
        } catch (error) {
          console.error('Error fetching game info:', error);
        }
      };
    
      fetchGameInfo(); 
    
    }, []); 

  return (
    <>
      {gameInfo && <CreatedGamesRow game={gameInfo} playerID={idPlayer} />}
    </>
  );
};

export default GameRowComponent;
