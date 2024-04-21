"use client";

// components
import { NavbarDefault } from "@/components";
import Accueil from "./accueil";
import Explications from "./explications";
import Explications_games from "./explication_games";
import  {TableAllGames}  from "./TableAllGames";
export default function Campaign() {
  return (
    <>
    
      <NavbarDefault/>
      <Accueil/>
      <Explications/>
      <Explications_games/>
      <TableAllGames/>
    </>
  );
}
