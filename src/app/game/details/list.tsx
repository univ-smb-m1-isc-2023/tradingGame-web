'use client'

import React, { useState } from 'react';
import GraphDetails from './graph';
import { DialogAchat } from './dialogAchat';
import { DialogVente } from './dialogVente';
import { idToSymbol } from '@/app/symbol/symboltoId';

const SymbolList: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null); // Initialize selectedSymbol state

  // Function to handle item click
  const handleItemClick = (symbol: string, name: string) => {
    console.log("Selected Name:", symbol);
    setSelectedSymbol(symbol); // Update selectedSymbol state with the clicked symbol
  };

  // Generate dynamic items list
  const items = [];
  for (let i = 1; i <= 10; i++) {
    const { symbol, name } = idToSymbol(i.toString()) || {}; // Get the corresponding name and symbol for the ID
    if (symbol && name) {
      items.push(
        <div
          key={i}
          role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedSymbol === symbol ? 'bg-green-500' : ''}`}
          onClick={() => handleItemClick(symbol, name)}
        >
          {symbol}
        </div>
      );
    }
  }

  return (
    <div className="flex gap-4">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {items}
        </nav>
      </div>
      {selectedSymbol && <GraphDetails symbol={selectedSymbol} name={selectedSymbol} />}
      {/* Render GraphDetails only if a symbol is selected */}
    </div>
  );
};

export default SymbolList;
