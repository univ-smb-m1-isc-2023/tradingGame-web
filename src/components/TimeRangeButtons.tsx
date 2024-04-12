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
      <button onClick={() => handleSelect('1D')} className="time-range-btn">
        1D
      </button>
      <button onClick={() => handleSelect('5D')} className="time-range-btn">
        5D
      </button>
      <button onClick={() => handleSelect('1W')} className="time-range-btn">
        1W
      </button>
      <button onClick={() => handleSelect('1M')} className="time-range-btn">
        1M
      </button>
      <button onClick={() => handleSelect('1Y')} className="time-range-btn">
        1Y
      </button>
    </div>
  );
}
