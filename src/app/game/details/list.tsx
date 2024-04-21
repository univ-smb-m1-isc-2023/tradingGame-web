'use client'

import React, { useState } from 'react';
import GraphDetails from './graph';
import { idToSymbol, symbolList } from '@/app/symbol/symboltoId';
import { PlayerInfo } from '../interface/PlayerInfo';
import { Game } from '../interface/Game';

interface SymbolList {
  player: PlayerInfo;
  game: Game;
}

const SymbolList: React.FC<SymbolList> = ({player,game}) => {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null); // Initialize selectedSymbol state

  // Function to handle item click
  const handleItemClick = (symbol: string, name: string) => {
    console.log("Selected Name:", symbol);
    setSelectedSymbol(symbol); // Update selectedSymbol state with the clicked symbol
  };

  // Generate dynamic items list
  const items = symbolList.map((item, index) => {
    const { symbol, name } = idToSymbol(item.id) || {};
    if (symbol && name) {
      return (
        <div
          key={index}
          role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedSymbol === symbol ? 'bg-green-500' : ''}`}
          onClick={() => handleItemClick(symbol, name)}
        >
          {name}
        </div>
      );
    }
    return null; // Return null if either symbol or name is not available
  });

  return (
    <div className="flex gap-4">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {items}
        </nav>
      </div>
      {selectedSymbol && <GraphDetails symbol={selectedSymbol} name={selectedSymbol} player={player} game={game} />}
      {/* Render GraphDetails only if a symbol is selected */}
    </div>
  );
};

export default SymbolList;
