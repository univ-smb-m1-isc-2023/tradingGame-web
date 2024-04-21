"use client";

import { Suspense } from "react";
import  PageHistoricalFetched  from "./pageHistoricalfetched";

export function DetailsorderPage() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
     <PageHistoricalFetched/>
     </Suspense>

    </>
  );
}


export default DetailsorderPage;
