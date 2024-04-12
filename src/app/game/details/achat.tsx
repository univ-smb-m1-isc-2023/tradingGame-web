import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react'; // Assurez-vous d'importer correctement votre composant Typography
import { statisticsCardsData } from '../data';
import { StatisticsChart } from '../widgets/charts';
import  { fetchstatisticsChartsData } from '../data/statistics-charts-data';
import { TimeRangeButtons } from '@/components/TimeRangeButtons';

const AchatComponent: React.FC = () => { // Renommez le composant en PascalCase
  const [selectedAction, setSelectedAction] = useState<string>(""); // État pour stocker l'action sélectionnée (achat/vente)
  const [inputValue, setInputValue] = useState<string>(""); // État pour stocker la valeur de l'input

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOKClick = () => {
    // Vous pouvez implémenter ici la logique pour traiter l'action sélectionnée et la valeur entrée
    console.log("Action:", selectedAction);
    console.log("Input Value:", inputValue);
  };


  
  function handleSelect(range: any): void {
    throw new Error('Function not implemented.');
  }
  const [statisticsChartsData, setStatisticsChartsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchstatisticsChartsData();
        console.log("------------")
        console.log(data)
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
  }, []);


  return (
    <>
      {/* StatisticCard en gros */}
      <div className="mb-48">
  {loading ? (
    <p>Loading...</p>
  ) : (
    <StatisticsChart
      key={statisticsChartsData[0].title}
      {...statisticsChartsData[0]}
      style={{ height: '1000px' }}
      footer={<TimeRangeButtons onSelect={(range: any) => handleSelect(range)} />}
    />
  )}
</div>

      {/* Input Box et Boutons */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Valeur..."
          className="mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="flex">
          <button
            onClick={() => handleActionSelect("achat")}
            className={`px-4 py-2 mr-2 bg-green-500 text-white rounded-md focus:outline-none ${selectedAction === "achat" ? "opacity-75" : ""}`}
          >
            Achat
          </button>
          <button
            onClick={() => handleActionSelect("vente")}
            className={`px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none ${selectedAction === "vente" ? "opacity-75" : ""}`}
          >
            Vente
          </button>
        </div>
        <button
          onClick={handleOKClick}
          className="px-4 py-2 ml-auto bg-blue-500 text-white rounded-md focus:outline-none"
        >
          OK
        </button>
      </div>
    </>
  );
};

export default AchatComponent; // Assurez-vous d'exporter votre composant correctement
