import React, { useState } from 'react';

const SymbolList: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedId === "FERRARI" ? 'bg-green-500' : ''}`}
          onClick={() => handleItemClick("FERRARI")}>
          MERCEDES
        </div>
        <div role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedId === "TOYOTA" ? 'bg-green-500' : ''}`}
          onClick={() => handleItemClick("TOYOTA")}>
          RENAULT
        </div>
        <div role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedId === "BMW" ? 'bg-green-500' : ''}`}
          onClick={() => handleItemClick("BMW")}>
          FERRARI
        </div>
      </nav>
    </div>
  );
};

export default SymbolList;
