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
