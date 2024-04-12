"use client";

import axios from "axios";

const fetchFinancialData = async ( symbol: any) => {
  try {
    const url =    `https://tradinggame-api.oups.net/stock/${symbol}`
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
