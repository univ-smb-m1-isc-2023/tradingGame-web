"use client";

import { Suspense, useEffect } from "react";
import PageHistoricalFetched from "./pageHistoricalfetched";

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
        <PageHistoricalFetched />
      </Suspense>
    </>
  );
}

export default DetailsorderPage;
