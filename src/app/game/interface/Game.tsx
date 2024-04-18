import { Wallet } from "./Wallet";

export interface Game {
    id: number;
    title: string;
    type: string;
    initialDate: string;
    finalDate: string;
    currentDate: string;
    initialBalance: number;
    moveDuration: string;
    adminId: number;
    wallets: Wallet[];
    totalDuration: string;
    remainingDuration: string;
  }
  