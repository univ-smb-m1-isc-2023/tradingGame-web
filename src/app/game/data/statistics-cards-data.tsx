import {
  BanknotesIcon,

} from "@heroicons/react/24/solid";

import { SymbolInfo } from "@/app/symbol/symboltoId";
import fetchFinancialData from "@/app/api/apiFinance";

export const FetchStatisticsCardsData = async (symbols: SymbolInfo[], currentDateString : string ) => {
  const finalCards = [];
  const currentDate = new Date(currentDateString);
  const precedentDate = new Date(currentDate);

  precedentDate.setDate(currentDate.getDate() - 7);

  const precedentDateString = precedentDate.toISOString().split('T')[0];

  // Use the correct syntax for iterating over the symbols array
  for (const symbol of symbols) {
    try {
      const data = await fetchFinancialData(symbol.symbol, precedentDateString, currentDateString);
      const diff = data[data.length-1].open - data[data.length-2].open;
      // Assuming you want to do something with diff or data here
      console.log(diff);
      finalCards.push({
        color: "black",
        icon: BanknotesIcon,
        title: symbol.name,
        value: data[data.length-1].open.toFixed(3),
        footer: {
          color: diff > 0 ? "text-green-500" : "text-red-500", // Corrected conditional color
          value: diff.toFixed(2),
          label: "than yesterday",
        },
      });
    } catch (error) {
      console.error('Error fetching financial data:', error);
      // Handle the error appropriately, such as setting finalCards to a default value or showing an error message
    }
  }
  return finalCards
};

