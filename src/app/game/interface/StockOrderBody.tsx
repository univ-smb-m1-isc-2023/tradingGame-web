export interface StockOrderBody {
    type: string;
    price: number;
    quantity: number;
    expirationGameDate: string; // Assurez-vous que la date est au format ISO (ex: '2024-04-20T12:00:00Z')
    walletId: string;
    stockValueId: string;
  }
