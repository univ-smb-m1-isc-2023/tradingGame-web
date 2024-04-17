import { chartsConfig } from "../configs";
import fetchFinancialData from "../../api/apiFinance";
import { subDays, subWeeks, subMonths, subYears, format } from 'date-fns';
import {symbolToId} from "../../symbol/symboltoId" 
const getData = async (symbol: string,startDate : Date, endDate : Date) => {
  try {
    const data = await fetchFinancialData(symbol,startDate,endDate);
    console.log(data);
    data?.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime(); // Utilisez getTime() pour comparer les dates en millisecondes
    });
    
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
  id: number;
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
  const series = Object.keys(rawData[0]).filter(key => key !== "date" && key !== "volume" && key !== "id").map(property => {
    
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

const calculateStartDate = (range: string, endTime: Date): string => {
  let startDate: Date;

  // Extraire le type de plage de temps et le nombre de jours, semaines, mois ou années
  const [, num, unit] = range.match(/^(\d+)([DWMY])$/i) || [];

  if (!num || !unit) {
    throw new Error('Invalid range format');
  }

  const numInt = parseInt(num, 10);

  // Calculer la date de début en fonction du type de plage de temps
  switch (unit.toUpperCase()) {
    case 'D':
      startDate = subDays(new Date(), numInt);
      break;
    case 'W':
      startDate = subWeeks(new Date(), numInt);
      break;
    case 'M':
      startDate = subMonths(new Date(), numInt);
      break;
    case 'Y':
      startDate = subYears(new Date(), numInt);
      break;
    default:
      throw new Error('Invalid range unit');
  }

  // Formater la date de début comme une chaîne au format 'yyyy-MM-dd'
  return format(startDate, 'yyyy-MM-dd');
};



export async function reloadData(range: string, symbol: string) {
  const endDate: Date = new Date('2023-11-23'); // End time
  const startDate = calculateStartDate(range, endDate);
  const endDateString = format(endDate, 'yyyy-MM-dd'); ;
  const idSymbol: string = symbolToId(symbol);
  // fetchstatisticsChartsData[idSymbol] = await fetchCharttoData(symbol,startDate,endDate);
}


export const fetchCharttoData = async (symbol : any,startTime:any, endTime :any) => {
  try {
    let data = await getData(symbol,startTime,endTime); // Assuming getData returns a Promise
    
    
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
      height: 420,
      series: seriesData,
      options: {
        ...chartsConfig,
        colors: ["#9400D3", "#FFD700", "#0000FF", "#008000"],
        stroke: {
          curve: 'straight',
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


export const fetchstatisticsChartData = async (title: string, symbol: string, startDate: string, endDate: string) => {
  return {
    color: "black",
    title: title,
    description: symbol,
    footer: "",
    chart: await fetchCharttoData(symbol, startDate, endDate),
  };
};



