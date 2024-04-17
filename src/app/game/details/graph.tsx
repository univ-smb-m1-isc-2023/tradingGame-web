"use effect"
import React, { useEffect, useState } from 'react';
import { StatisticsChart  } from '../widgets/charts';
import { fetchstatisticsChartData } from '../data/statistics-charts-data';
import { DialogAchat } from './dialogAchat';
import { DialogVente } from './dialogVente';

interface GraphDetailsProps {
  symbol: string;
  name: string;
}

const GraphDetails: React.FC<GraphDetailsProps> = ({ symbol, name }) => {
  const [statisticsChartsData, setStatisticsChartsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [await fetchstatisticsChartData(name.toString(), symbol.toString(), "2023-01-01", "2024-01-01")];
        if (data) {
          setStatisticsChartsData(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching statisticsChartsData:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name, symbol]); // Add name and symbol to the dependency array

  return (
    <div className="mb-48">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {statisticsChartsData.map((chartData, index) => (
            <StatisticsChart
              key={index}
              width={1200}
              height={360}
              {...chartData}
              footer=""
            />
          ))}
          
        </>
      )}
      <DialogAchat/>

      <DialogVente/>
    </div>



  );
};

export default GraphDetails;
