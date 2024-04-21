"use client";

import { Suspense } from "react";
import PageOrderFetched from "./pageOrderfetched";

export function detailsorderPage() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
     <PageOrderFetched/>
     </Suspense>

    </>
  );
}


export default detailsorderPage;
