interface StockOrder {
    type: string;
    price: number;
    quantity: number;
    creationGameDate: string;
    expirationGameDate: string;
    stockValue: StockValue;
    status: string;
  }