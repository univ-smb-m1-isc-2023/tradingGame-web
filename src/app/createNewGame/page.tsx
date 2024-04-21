"use client";


import { Suspense } from "react";
import CreateNewGame from "./createNewGame";

export function detailsPage() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>

     <CreateNewGame/>
     </Suspense>

    </>
  );
}


export default detailsPage;
