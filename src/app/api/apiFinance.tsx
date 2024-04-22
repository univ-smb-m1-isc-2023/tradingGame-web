"use client";

import axios, { AxiosError } from "axios";
import { StockOrderBody } from "../game/interface/StockOrderBody";
import { GameBody } from "../game/interface/GameBody";
import {
  axiosGetWithToken,
  axiosPostWithToken,
  base_url,
  fetchWithToken,
  fetchWithTokenNoOption,
} from "@/utils/UserGestion";
import { start } from "repl";
import { subtractOneYear } from "./dateFunction";

const fetchFinancialData = async (
  symbol: any,
  startTime: any,
  endTime: any
) => {
  const StartTime = subtractOneYear(startTime);
  const url = base_url + `/stock/${symbol}/${StartTime}/${endTime}`;

  return axiosGetWithToken(url);
};

export default fetchFinancialData;

export const fetchGame = async (idGame: string) => {
  try {
    const response = await fetchWithTokenNoOption(base_url + `/game/${idGame}`);
    if (!response.ok) {
      throw new Error("Failed to fetch Game info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Game info:", error);
  }
};

export const fetchPlayer = async (idPlayer: string) => {
  try {
    const response = await fetchWithTokenNoOption(
      base_url + `/player/${idPlayer}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Game info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Player info:", error);
  }
};

export const fetchSymbol = async () => {
  try {
    const response = await fetchWithTokenNoOption(base_url + `/stock`);
    if (!response.ok) {
      throw new Error("Failed to fetch Game info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching actions:", error);
  }
};

export const fetchAllPlayers = async () => {
  try {
    const response = await fetchWithTokenNoOption(base_url + `/player`);
    if (!response.ok) {
      throw new Error("Failed to fetch Game info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching actions:", error);
  }
};

export const fetchActions = async (idWallet: number) => {
  try {
    const response = await fetchWithTokenNoOption(
      base_url + `/wallet/${idWallet}/stock_value`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch actions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching actions :", error);
  }
};

export const fetchAllGames = async () => {
  try {
    const response = await fetch(base_url + `/game`);
    if (!response.ok) {
      throw new Error("Failed to fetch actions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching actions :", error);
  }
};

export const addOrder = async (order: StockOrderBody) => {
  axiosPostWithToken(base_url + "/wallet/stock_order", order);
};

export const fetchcreateGame = async (game: GameBody) => {
  //console.log(game);
  // Effectuer la requête POST
  axiosPostWithToken(base_url + "/game", game);
};
