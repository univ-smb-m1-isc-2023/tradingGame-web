"use client";

import axios from "axios";

const fetchFinancialData = async ( symbol: any) => {
  const APIKEY= "qjeWVzibne056R2tsP4QZXfJaACnXdLd";
  try {
    const url =    `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${symbol}?from=2023-10-12&to=2023-10-18&apikey=${APIKEY}`
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
