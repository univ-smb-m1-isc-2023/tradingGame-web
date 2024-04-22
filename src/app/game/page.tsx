"use client";

import { Suspense, useEffect } from "react";
import { DashBoardFetch } from "./DashBoardFetch";
import router from "next/router";

export function DashboardHome() {
  useEffect(() => {
    // Vérifie si le token est vide
    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
      if (!token) {
        token = "";
      }
    } else {
      token = "";
    }
    if (token === "") {
      // Redirige vers la page d'accueil
      window.location.href = `/`;
    }
  }, []);
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoardFetch />
      </Suspense>
    </>
  );
}

export default DashboardHome;
