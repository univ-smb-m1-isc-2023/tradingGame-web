"use client";

import { Suspense } from "react";
import { DashBoardFetch } from "./DashBoardFetch"; 


export function DashboardHome() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <DashBoardFetch/>
        </Suspense>

    </>
  );
}

  
export default DashboardHome;
