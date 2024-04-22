"use client";

import { Suspense, useEffect } from "react";
import PageActionsFetched from "./pageActionfetched";

export function DetailsorderPage() {
  useEffect(() => {
    // Vérifie si le token est vide
    const token = localStorage.getItem("token");
    if (token === "") {
      // Redirige vers la page d'accueil
      window.location.href = `/`;
    }
  }, []);
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PageActionsFetched />
      </Suspense>
    </>
  );
}

export default DetailsorderPage;
