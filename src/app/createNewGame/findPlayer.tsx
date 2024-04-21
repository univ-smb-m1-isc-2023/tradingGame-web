import { fetchAllPlayers } from "../api/apiFinance";

export interface PlayerInterface {
    username: string;
    id: number;
}

let players: PlayerInterface[] | null = null;

export async function findPlayer(searchQuery: string): Promise<PlayerInterface[] | null> {
    try {
        if (players === null) {
            players = await fetchAllPlayers();
        }
        
        if (players !== null) {
            // Filtrer les joueurs en fonction du nom de recherche
            const filteredPlayers = players.filter((player: PlayerInterface) =>
                player.username.toLowerCase().includes(searchQuery.toLowerCase())
            ) as PlayerInterface[];

            return filteredPlayers;
        } else {
            // No players found yet
            return null;
        }
    } catch (error) {
        console.error("Error searching players:", error);
        throw new Error("Failed to search players. Please try again later.");
    }
}
