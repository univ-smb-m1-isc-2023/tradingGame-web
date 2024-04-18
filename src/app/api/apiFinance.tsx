"use client";

import axios from "axios";

const fetchFinancialData = async ( symbol: any, startTime : any, endTime: any) => {
  try {
    const url =    `https://tradinggame-api.oups.net/stock/${symbol}/${startTime}/${endTime}`
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

