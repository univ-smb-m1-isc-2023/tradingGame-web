import { fetchSymbol } from "./apiFinance"
import { Symbol } from "../game/interface/Symbol";


export const getIdStock = async (symbol: string) => {
    const stocks = await fetchSymbol();
    const foundStock = stocks.find((stock: Symbol)  => stock.symbol === symbol);

    if (foundStock) {
        return foundStock.id;
    } else {
        return 0; // Retourne 0 si le symbole n'est pas trouvé
    }
};