"use client";

import { Sidebar } from "../widgets/layout";
import SymbolList from "./list"

export function detailsPage() {
  function handleItemClick(id: string): void {
    throw new Error("Function not implemented.");
  }

  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50 flex">
        <div className="w-1/4">

          <Sidebar />
        </div>
        <SymbolList />

     
      </div>
    </>
  );
}


export default detailsPage;
