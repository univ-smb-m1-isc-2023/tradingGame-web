import { chartsConfig } from "../configs";
import fetchFinancialData from "../../api/apiFinance";

const getData = async (symbol: string) => {
  try {
    const data = await fetchFinancialData(symbol);
    console.log(data);

    const { categories, series } = await dataToLegends(data);
    console.log("Categories:", categories);
    console.log("Series:", series);
    return { categories, series };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

interface FinancialData {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
  [key: string]: string | number; // Index signature
}

const dataToLegends = async (rawData: FinancialData[]) => {
  // Extracting categories based on month names
  const categories = rawData.map(item => {
    const date = new Date(item.date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
    return `${day}${month}${year}`;
  });
  
  

  // Separating data by properties (low, open, high, close)
  const series = Object.keys(rawData[0]).filter(key => key !== "date" && key !== "volume").map(property => {
    return {
      name: property,
      data: rawData.map(item => item[property])
    };
  });

  return { categories, series };
};

interface ChartSeries {
  name: string;
  data: (string | number)[];
}

let dailySalesChart: {
  type: string;
  height: number;
  series: ChartSeries[]; // Provide the correct type annotation
  options: any; // You may also want to provide a specific type for options
} = {
  type: "line",
  height: 440,
  series: [], // Initialize with an empty array of ChartSeries
  options: {
    // Your default options here
  },
};


export const fetchCharttoData = async (symbol : any) => {
  try {
    let data = await getData(symbol); // Assuming getData returns a Promise
    data?.categories.reverse();
    const categoriesData = data?.categories ?? [];
    const seriesData = data?.series ?? [];
    console.log("Categories:", categoriesData);
    console.log("Series:", seriesData);
    
    // Construct the key for LocalStorage based on the symbol
    const localStorageKey = `${symbol}Data`;

    // Convert data to JSON string
    const jsonData = JSON.stringify(data);

    // Save data to LocalStorage
    localStorage.setItem(localStorageKey, jsonData);

    return {
      type: "line",
      height: 220,
      series: seriesData,
      options: {
        ...chartsConfig,
        colors: ["#9400D3", "#FFD700", "#0000FF", "#008000"],
        stroke: {
          lineCap: "round",
        },
        markers: {
          size: 5,
        },
        xaxis: {
          ...chartsConfig.xaxis,
          categories: categoriesData,
        },
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return []; // Return an empty array if there's an error
  }
};

export const  fetchstatisticsChartsData =  async () => {
  return [
  {
    //RACE
    color: "red",
    title: "FERARRI",
    description: "",
    footer: "1 2 3 4 5 6",
    chart: await fetchCharttoData("RACE"),
  },
  {
    //MBGYY
    color: "blue",
    title: "Mercedes",
    description: "",
    footer: "1 2 3 4 5 6",
    chart: await fetchCharttoData("MBGYY"),
  },
  {
    //RNLSY
    color: "yellow",
    title: "Renault",
    description: "",
    footer: "1 2 3 4 5 6",
    chart: await fetchCharttoData("RNLSY"),
  },
];
}

export default fetchstatisticsChartsData;
