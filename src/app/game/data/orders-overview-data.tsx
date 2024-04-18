import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import { PlayerInfo } from "../interface/PlayerInfo";
import { WalletPlayer } from "../interface/Wallet";



export const findWallet = (idGame: string, player: PlayerInfo): WalletPlayer | null => {
  for (const wallet of player.wallets) {
    if (wallet.gameId.toLocaleString() === idGame) {
      return wallet;
    }
  }
  return null;
};

export const ordersOverviewDataonPending = (idGame: string, Player: PlayerInfo)=>{
  const wallet = findWallet(idGame, Player);
  const ordersPending = [];
  if (wallet != null) {
    for (const stockOrder of wallet.stockOrders) {
      ordersPending.push({
        icon: ClockIcon,
        color: "text-blue-gray-300",
        title: stockOrder.stockValue.symbol,
        description: "TOTAL : "+ stockOrder.price + "€, QT : "+stockOrder.quantity,
      })
    }
  }
  return ordersPending
}
