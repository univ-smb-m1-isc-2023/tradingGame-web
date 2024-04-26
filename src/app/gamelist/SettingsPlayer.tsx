import {
  axiosDeleteWithToken,
  base_url,
  fetchWithTokenNoOption,
  userLogOut,
} from "@/utils/UserGestion";
import { LockClosedIcon, PowerIcon } from "@heroicons/react/24/solid";
import React from "react";

const SettingsPlayer: React.FC = () => {
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    console.log("Déconnexion...");
    userLogOut();
    window.location.href = `/`;
  };

  const handleDeleteAccount = async () => {
    console.log("Suppression du compte...");
    let idTemp;
    if (typeof window !== "undefined") {
      idTemp = await localStorage.getItem("idUser");
    }
    let id = -1;
    if (idTemp) {
      id = parseInt(idTemp);
    }

    let response = await axiosDeleteWithToken(
      base_url + "/player/delete/" + id
    );
  };

  return (
    <div className="p-5 border-dashed border rounded text-center">
      <h2 className="text-2xl font-bold mb-5 text-blue-500">
        Paramètres du joueur
      </h2>
      <div className="flex flex-col items-center space-y-4">
        {" "}
        {/* Utilisation de flexbox pour centrer les boutons */}
        <button
          onClick={handleLogout}
          style={buttonStyle}
          className="flex items-center justify-start py-2 px-4 rounded-md text-lg font-semibold bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 hover:bg-gray-50"
        >
          <PowerIcon className="h-5 w-5 mr-2" />
          <span>Log Out</span>
        </button>
        <button
          onClick={handleDeleteAccount}
          style={buttonStyle}
          className="flex items-center justify-start py-2 px-4 rounded-md text-lg font-semibold bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 hover:bg-gray-50"
        >
          <LockClosedIcon className="h-5 w-5 mr-2" />
          <span>Delete account</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsPlayer;
