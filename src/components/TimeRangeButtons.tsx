import React, { useState, useEffect } from 'react';

interface TimeRangeButtonsProps {
  onSelect: (range: string) => void; // Specify the type of onSelect prop
}

export function TimeRangeButtons({ onSelect }: TimeRangeButtonsProps) {
  const handleSelect = (range: string) => {
    onSelect(range);
  };

  return (
    <div className="flex space-x-4">
    <button onClick={() => handleSelect('1D')} className="time-range-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      1D
    </button>
    <button onClick={() => handleSelect('5D')} className="time-range-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      5D
    </button>
    <button onClick={() => handleSelect('1W')} className="time-range-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      1W
    </button>
    <button onClick={() => handleSelect('1M')} className="time-range-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      1M
    </button>
    <button onClick={() => handleSelect('1Y')} className="time-range-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      1Y
    </button>
  </div>
  
  );
}
