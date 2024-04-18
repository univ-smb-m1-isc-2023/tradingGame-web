
export interface Wallet {
    id : number;
    ownerUsername: string;
    balance: number;
    lastMonthProfit: number;
    lastYearProfit: number;
  }


export interface WalletPlayer {
  id : number;
  gameId : number;
  balance: number;
  lastMonthProfit: number;
  lastYearProfit: number;
  stockOrders : StockOrder[];
}