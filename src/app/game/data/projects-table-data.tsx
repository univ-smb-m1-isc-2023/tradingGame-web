import { Game } from "../interface/Game";

export const membersGameData = async (game: Game) => {
  const sortedWallets = game.wallets.slice().sort((a, b) => b.balance - a.balance);
  const finalTable = [];
  let i = 1; // Initialize rank counter
  for (const wallet of sortedWallets) { // Use for...of loop to iterate over game.wallets
    finalTable.push({
      name: wallet.ownerUsername,
      rank: i++,
      budget: wallet.balance,
    });
  }
  return finalTable; // Don't forget to return the finalTable array
};