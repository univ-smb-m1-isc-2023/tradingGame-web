"use client";

import Gamelist from "./gamelist";
import { Suspense } from "react";

export default function gamelistPage() {
  
  return (
      <>
          <Suspense fallback={<div>Loading...</div>}>

       <Gamelist/>
       </Suspense>

      </>
  );
}
  