"use client";

import axios, { AxiosError } from "axios";
import { StockOrderBody } from "../game/interface/StockOrderBody";
import { GameBody } from "../game/interface/GameBody";
import { start } from "repl";
import { subtractOneYear } from "./dateFunction";

const fetchFinancialData = async ( symbol: any, startTime : string , endTime: string) => {
  try {
    const StartTime = subtractOneYear(startTime)
    const url =    `https://tradinggame-api.oups.net/stock/${symbol}/${StartTime}/${endTime}`
    console.log(url)
    const response = await axios.get(
      url
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchFinancialData;


export const fetchGame = async (idGame : string )=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/game/${idGame}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Game info');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching Game info:', error);
  }


}

export const fetchPlayer = async (idPlayer : string)=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/player/${idPlayer}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Game info');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching Player info:', error);
  }
}


export const fetchSymbol = async ()=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/stock`);
    if (!response.ok) {
      throw new Error('Failed to fetch Game info');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching actions:', error);
  }
}

export const fetchAllPlayers= async ()=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/player`);
    if (!response.ok) {
      throw new Error('Failed to fetch Game info');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching actions:', error);
  }
}

export const fetchActions= async (idWallet : number)=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/wallet/${idWallet}/stock_value`);
    if (!response.ok) {
      throw new Error('Failed to fetch actions');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching actions :', error);
  }
}


export const fetchAllGames= async ()=>{
  try {
    const response = await fetch(`https://tradinggame-api.oups.net/game`);
    if (!response.ok) {
      throw new Error('Failed to fetch actions');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching actions :', error);
  }
}


export const addOrder = async (order : StockOrderBody) =>{
  try {
    // Effectuer la requête POST
    const response = await axios.post('https://tradinggame-api.oups.net/wallet/stock_order', order);

    // Traiter la réponse
    console.log('Réponse de l\'API:', response.data);
    
    // Retourner les données de réponse si nécessaire
    return response.data;

  } catch (error) {
    // Gérer les erreurs
    console.error('Erreur lors de la requête POST:', error);
    
    // Retourner une erreur ou null en fonction de vos besoins
    return null;
  }

}




export const fetchcreateGame = async (game : GameBody) =>{
  try {
    
    console.log(game)
    // Effectuer la requête POST
    const response = await axios.post('https://tradinggame-api.oups.net/game',game);

    // Traiter la réponse
    console.log('Réponse de l\'API:', response.data);
    

    
    // Retourner les données de réponse si nécessaire
    return response.data;

  } catch (error) {
    // Gérer les erreurs
    const axiosError = error as AxiosError;
    // Alert the entire response received from the server
    if (axiosError.response) {
      alert(JSON.stringify(axiosError.response.data)); // Alert the entire response object
    } else {
      console.error('Error:', axiosError.message); // Log any other type of error
    }
    // Optionally, you can re-throw the error to handle it further in the calling function
    throw error;
  }


}