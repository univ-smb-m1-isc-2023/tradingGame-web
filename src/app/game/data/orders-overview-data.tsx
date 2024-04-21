import {

  ClockIcon,
  CurrencyEuroIcon,
  CreditCardIcon
} from "@heroicons/react/24/solid";
import { PlayerInfo } from "../interface/PlayerInfo";
import { fetchActions } from "@/app/api/apiFinance";



export const findWallet = async (idGame: string, player: PlayerInfo) => {
  for (const wallet of player.wallets) {
    if (wallet.gameId.toLocaleString() === idGame) {
      return wallet;
    }
  }
  return null;
};

export const ordersOverviewDataonPending = async (idGame: string, Player: PlayerInfo) => {
  const wallet = await findWallet(idGame, Player);
  const ordersPending = [];
  if (wallet != null) {
    for (const stockOrder of wallet.stockOrders) {
      if (stockOrder.status == "PENDING")
        ordersPending.push({
          icon: ClockIcon,
          color: "text-blue-gray-300",
          title: stockOrder.stockValue.symbol,
          description: "TOTAL : " + stockOrder.price + "€, QT : " + stockOrder.quantity,
        })

    }
  }
  return ordersPending
}

export const ordersOverviewHistoricalData = async (idGame: string, player: PlayerInfo) => {
  const wallet = await findWallet(idGame, player);
  const orders = [];
  if (wallet != null) {
    for (const stockOrder of wallet.stockOrders) {
      let icon = CreditCardIcon; // Default icon
      let color = "text-blue-gray-300"; // Default color
      let type = ""
      switch (stockOrder.status) {
        case "EXECUTED":
          icon = CurrencyEuroIcon; // Replace YourExecutedIconComponent with the actual icon component for executed orders
          break;
        case "PENDING":
          icon = ClockIcon; // Replace YourClockIconComponent with the actual icon component for pending orders
          break;
        default:
          // For other status, use a default icon
          icon = CreditCardIcon; // Replace YourDefaultIconComponent with the actual icon component for other status
          break;
      }


      switch (stockOrder.type) {
        case "BUY_LIMIT":
          type = "Ordre d'achat à la limite"; // Replace YourExecutedIconComponent with the actual icon component for executed orders
          break;
        case "BUY_MARKET":
          type = "Ordre d'achat au marché"; // Replace YourClockIconComponent with the actual icon component for pending orders
          break;
        case "SELL_LIMIT":
          type = "Ordre de vente à la limite"; // Replace YourClockIconComponent with the actual icon component for pending orders
          break;
        default:
          // For other status, use a default icon
          type = "Ordre de vente au marché"; // Replace YourDefaultIconComponent with the actual icon component for other status
          break;
      }

      orders.push({
        icon,
        status: stockOrder.status,
        color,
        type : type,
        date: stockOrder.creationGameDate,
        title: stockOrder.stockValue.symbol,
        description: `TOTAL: ${stockOrder.price}€, QT: ${stockOrder.quantity}`,
      });
    }
  }
  return orders;
};


export const playerActions = async (idGame: string, player: PlayerInfo) => {
  const wallet = await findWallet(idGame, player);
  const orders = [];

  if (wallet != null) {
    const actions = await fetchActions(wallet.id);

    if (actions != null) {
      for (const action of actions) { // corrected loop syntax
        const icon = CurrencyEuroIcon; // Default icon

        orders.push({
          icon,
          title: action.symbol,
          price: action.price, // added comma
          quantity: action.quantity // added comma
        });
      }
    }
  }

  return orders;
};

