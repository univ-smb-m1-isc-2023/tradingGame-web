"use client";

import { Sidebar } from "../widgets/layout"; 
import SymbolList from "./list"
import AchatComponent from "./achat";
export function detailsPage() {
    // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
    return (
      <>
        <div className="min-h-screen bg-blue-gray-50/50 flex">
          <div className="w-1/4">
            
            <Sidebar />
          </div>
          <SymbolList/>

          <div className="w-3/4 flex flex-col justify-center items-center"> {/* Changed flex to flex-col */}
          <AchatComponent/>
          </div>
        </div>
      </>
    );
  }
  
    
  export default detailsPage;
  