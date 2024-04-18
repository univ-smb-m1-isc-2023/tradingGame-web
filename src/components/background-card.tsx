import React from "react";

import { Typography } from "@material-tailwind/react";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
}

export function BackgroundCard({ title, children }: BackgroundCardProps) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-gray-600 rounded-xl">
      <div>
        <Typography placeholder="" variant="h2" className="text-center" color="white" onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {title}
        </Typography>
        <Typography
        onPointerEnterCapture={null} onPointerLeaveCapture={null}
          placeholder=""
          color="white"
          className="my-2 text-base w-full text-center font-normal"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}
export default BackgroundCard;