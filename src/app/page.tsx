// components
import { NavbarDefault } from "@/components";
import Accueil from "./accueil";
import Explications from "./explications";
import Explications_games from "./explication_games";

export default function Campaign() {
  return (
    <>
    
      <NavbarDefault/>
      <Accueil/>
      <Explications/>
      <Explications_games/>
    </>
  );
}
