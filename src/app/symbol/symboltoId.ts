export const symbolToId = (symbol: string): string => {
    switch (symbol) {
      case "AAPL":
        return "1";
      case "AMZN":
        return "2";
      case "TSLA":
        return "3";
      case "GOOGL":
        return "4";
      case "MSFT":
        return "5";
      case "NFLX":
        return "6";
      case "NVDA":
        return "7";
      case "FB":
        return "8";
      case "SHOP":
        return "9";
      case "BA":
        return "10";
      default:
        return "";
    }
  };
  
  export interface SymbolInfo {
    id: string;
    symbol: string;
    name: string;
  }


  export const idToSymbol = (id: string): SymbolInfo | null => {
    switch (id) {
      case "1":
        return { id: "1", symbol: "AAPL", name: "Apple Inc." };
      case "2":
        return { id: "2", symbol: "AMZN", name: "Amazon.com Inc." };
      case "3":
        return { id: "3", symbol: "TSLA", name: "Tesla, Inc." };
      case "4":
        return { id: "4", symbol: "GOOGL", name: "Alphabet Inc." };
      case "5":
        return { id: "5", symbol: "MSFT", name: "Microsoft Corporation" };
      case "6":
        return { id: "6", symbol: "NFLX", name: "Netflix, Inc." };
      case "7":
        return { id: "7", symbol: "NVDA", name: "NVIDIA Corporation" };
      case "8":
        return { id: "8", symbol: "FB", name: "Meta Platforms, Inc." };
      case "9":
        return { id: "9", symbol: "SHOP", name: "Shopify Inc." };
      case "10":
        return { id: "10", symbol: "BA", name: "The Boeing Company" };
      default:
        return null;
    }
  };

  export const symbolList: SymbolInfo[] = [
    { id: "1", symbol: "AAPL", name: "Apple Inc." },
    { id: "2", symbol: "AMZN", name: "Amazon.com Inc." },
    { id: "3", symbol: "TSLA", name: "Tesla, Inc." },
    { id: "4", symbol: "GOOGL", name: "Alphabet Inc." },
    { id: "5", symbol: "MSFT", name: "Microsoft Corporation" },
    { id: "6", symbol: "NFLX", name: "Netflix, Inc." },
    { id: "7", symbol: "NVDA", name: "NVIDIA Corporation" },
    { id: "8", symbol: "FB", name: "Meta Platforms, Inc." },
    { id: "9", symbol: "SHOP", name: "Shopify Inc." },
    { id: "10", symbol: "BA", name: "The Boeing Company" }
  ];
  