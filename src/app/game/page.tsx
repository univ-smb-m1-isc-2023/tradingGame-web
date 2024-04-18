"use client";

import { Sidebar } from "./widgets/layout"; 
import { Dashboard } from "./dashboard"
import { Suspense } from 'react';

export function DashboardHome() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50 h-full  flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        
        <div className="w-3/4 flex flex-col justify-center items-center"> {/* Changed flex to flex-col */}
  
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
        </div>
      </div>
    </>
  );
}

  
export default DashboardHome;
