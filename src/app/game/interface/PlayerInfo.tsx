import { Game } from "./Game";
import { WalletPlayer } from "./Wallet";

export interface PlayerInfo {
    username: string;
    id: number;
    wallets : WalletPlayer[],
    createdGames: Game[]
  }
  