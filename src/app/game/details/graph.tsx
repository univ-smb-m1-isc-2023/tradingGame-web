import React, { useEffect, useState } from 'react';
import { StatisticsChart } from '../widgets/charts';
import { fetchstatisticsChartsData } from '../data/statistics-charts-data';
import { TimeRangeButtons } from '@/components/TimeRangeButtons';

interface GraphDetailsProps {
  handleItemClick: (id: string) => void;
  selectedId: string | null;
}

const GraphDetails: React.FC<GraphDetailsProps> = ({ handleItemClick, selectedId }) => {
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedGraph, setSelectedGraph] = useState<number>(0);
  const [statisticsChartsData, setStatisticsChartsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchstatisticsChartsData();
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

    const convertIdToSymbol = (selectedId: string | null): number => {
      if (selectedId === "FERRARI") {
        return 0;
      } else if (selectedId === "MERCEDES") {
        return 1;
      } else {
        return 2;
      }
    };

    if (selectedId) {
      setSelectedGraph(convertIdToSymbol(selectedId));
    }
    
    fetchData();
  }, [selectedId]);

  const handleSelect = (range: any): void => {
    // Implement your logic here
  };

  return (
    <div className="mb-48">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StatisticsChart
          width={1200}
          heigth={3600}
          key={statisticsChartsData[selectedGraph].title}
          {...statisticsChartsData[selectedGraph]}
          footer={<TimeRangeButtons onSelect={(range: any) => handleSelect(range)} />}
        />
      )}
    </div>
  );
};

export default GraphDetails;
