"use effect"
import React, { useEffect, useState } from 'react';
import { StatisticsChart  } from '../widgets/charts';
import { fetchstatisticsChartData } from '../data/statistics-charts-data';
import { PlayerInfo } from '../interface/PlayerInfo';
import { Game } from '../interface/Game';
import DialogAchat from './dialogAchat';
import DialogVente from './dialogVente';

interface GraphDetailsProps {
  symbol: string;
  name: string;
  player: PlayerInfo;
  game: Game;
}

const GraphDetails: React.FC<GraphDetailsProps> = ({ symbol, name, player, game }) => {
  const [statisticsChartsData, setStatisticsChartsData] = useState<any[]>([]);
  const [OpenValue, setOpenValue] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [await fetchstatisticsChartData(name.toString(), symbol.toString(), game.initialDate, game.currentDate)];
        if (data) {
          console.log("data")

          console.log(data)
          setOpenValue(data[0].chart.series[0].data[0])
          setStatisticsChartsData(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching statisticsChartsData:", error);
      } finally {
        //setOpenValue(statisticsChartsData[0].charts.series[0][0])
        setLoading(false);
      }
    };

    fetchData();
  }, [name, symbol]); // Add name and symbol to the dependency array

  return (
    <div className="mb-32">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {statisticsChartsData.map((chartData, index) => (
            <StatisticsChart
              key={index}
              width={1000}
              height={360}
              {...chartData}
              footer=""
            />
          ))}

        </>
      )}
    {statisticsChartsData && <DialogAchat player={player} game={game} openValue={OpenValue} symbol={symbol}/>}
  
    {statisticsChartsData && <DialogVente player={player} game={game} openValue={OpenValue} symbol={symbol}/>}

    </div>





  );
};

export default GraphDetails;
