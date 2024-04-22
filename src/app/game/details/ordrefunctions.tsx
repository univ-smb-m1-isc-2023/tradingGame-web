import { addOrder } from "@/app/api/apiFinance";
import { Game } from "../interface/Game";
import { PlayerInfo } from "../interface/PlayerInfo";
import { StockOrderBody } from "../interface/StockOrderBody";
import { findWallet } from "../data";
import { getIdStock } from "@/app/api/stock";

export interface Ordre {
    player: PlayerInfo;
    game: Game;
    openValue : number;
    symbol : string;
  }


export async function ordreAchat(player : PlayerInfo , game : Game, MarketOrder : boolean, Price : number, quantity : number,symbol: string){
    const wallet = await findWallet(game.id.toLocaleString(),player )
    const stockId = await getIdStock(symbol);
    let type = "BUY_LIMIT"
    if(MarketOrder){
        type = "BUY_MARKET"
        
    }
    console.log(wallet,stockId)

    if(wallet && stockId){
        const order: StockOrderBody = {
            type: type,
            price: Price, // Remplacez par le prix réel
            quantity: quantity, // Remplacez par la quantité réelle
            expirationGameDate: '3500-04-20T12:00:00Z', // Remplacez par la date réelle
            walletId: wallet.id.toLocaleString(), // Remplacez par l'ID de votre portefeuille
            stockValueId: stockId, // Remplacez par l'ID de la valeur d'action
        };
    console.log("orderAchat")

    console.log(order)
    const response = await addOrder(order)
    console.log(response)
    }
}


export async function ordreVente(player : PlayerInfo , game : Game, MarketOrder : boolean, Price : number, quantity : number,symbol: string){
    const wallet = await findWallet(game.id.toLocaleString(),player )
    const stockId = await getIdStock(symbol);
    let type = "SELL_LIMIT"
    if(MarketOrder){
        type = "SELL_MARKET"
        
    }
    console.log(wallet,stockId)
    if(wallet && stockId){
        const order: StockOrderBody = {
            type: type,
            price: Price, // Remplacez par le prix réel
            quantity: quantity, // Remplacez par la quantité réelle
            expirationGameDate: '2024-04-20T12:00:00Z', // Remplacez par la date réelle
            walletId: wallet.id.toLocaleString(), // Remplacez par l'ID de votre portefeuille
            stockValueId: stockId, // Remplacez par l'ID de la valeur d'action
        };
    console.log("orderVente")

    console.log(order)
    const response = await addOrder(order)
    console.log(response)
    }
}
