"use client";

import { Suspense } from "react";
import  PageActionsFetched  from "./pageActionfetched";

export function DetailsorderPage() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
     <PageActionsFetched/>
     </Suspense>

    </>
  );
}


export default DetailsorderPage;
