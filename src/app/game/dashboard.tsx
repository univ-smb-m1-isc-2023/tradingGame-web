"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { StatisticsCard } from "./widgets/cards";
import { StatisticsChart } from "./widgets/charts";
import {
  
  fetchstatisticsChartData,
  FetchStatisticsCardsData,
  membersGameData,
  ordersOverviewDataonPending,
} from "./data";
import { TrophyIcon, CurrencyDollarIcon} from "@heroicons/react/24/solid";
import { fetchGame, fetchPlayer } from "../api/apiFinance";
import { useSearchParams } from "next/navigation";
import { symbolList } from "../symbol/symboltoId";


export function Dashboard() {
  // const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null); // Set initial value as null
  // const [gameInfo, setGameInfo] = useState<Game | null>(null); // Set initial value as null

  const searchParams = useSearchParams();
  const [membersGame, setMembersGame] = useState<any[]>([]); // Set initial value as null
  const [statisticsChartsData, setStatisticsChartsData] = useState<any[]>([]);
  const [statisticsCardsData, setstatisticsCardsData] = useState<any[]>([]);
  const [ordersOverviewData, setordersOverviewData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerID = searchParams.get("playerID");
        const gameID = searchParams.get("gameID");
        let gameResponse = null
        let playerResponse = null
        if (playerID!=null) {
          playerResponse = await fetchPlayer(playerID);
          //setPlayerInfo(playerResponse);
        }

        if (gameID!=null) {
          gameResponse = await fetchGame(gameID);
          //setGameInfo(gameResponse)
        }
  
        if (gameResponse && gameID && playerResponse) {
          const listOfSymbol = symbolList.slice(0, 3);
          const data = await Promise.all(listOfSymbol.map(symbol => fetchstatisticsChartData(symbol.name, symbol.symbol, gameResponse?.initialDate, gameResponse?.currentDate)));
          setStatisticsChartsData(data);
          const dataCard = await FetchStatisticsCardsData(listOfSymbol,gameResponse.currentDate)
          setstatisticsCardsData(dataCard)
          const dataMembers = await membersGameData(gameResponse)
          setMembersGame(dataMembers)
          const dataPendingOrders = ordersOverviewDataonPending(gameID,playerResponse)
          setordersOverviewData(dataPendingOrders)
          setLoading(false); // Move setLoading(false) inside the fetchData function
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Call fetchData directly inside useEffect
  
  }, []); // Empty dependency array to run once on mount
  


  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-3 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}

            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            }
          
          )}
            footer={
              <Typography className="font-normal text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
     <div className="mb-12 grid grid-cols-1 gap-y-20 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      
     {loading ? (
  <p>Loading...</p>
) : (
  statisticsChartsData.map((props) => (
    <StatisticsChart
      key={props.title}
      {...props}
      width = {350}
      heigth = {500}
    />
  ))
)}
</div>


      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
   
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                Team
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}              >
               <TrophyIcon className="h-4 w-4 text-blue-gray-200" />
<strong>Classement</strong>
              </Typography>
            </div>
         
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Members", "Money", "Rank"].map(el => (
                        <th key={el} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <Typography variant="small" className="text-[11px] font-medium uppercase text-blue-gray-400"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {membersGame.map(({ name, rank, budget }, key) => (
                      <tr key={name}>
                        <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                          <div className="flex items-center gap-4">
                            <Typography variant="small" color="blue-gray" className="font-bold"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>{name}</Typography>
                          </div>
                        </td>
                        <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                          <Typography variant="small" className="text-xs font-medium text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>{budget}</Typography>
                        </td>
                        <td className={`py-3 px-5 ${key === membersGame.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                          <div className="w-10/12">
                            <Typography variant="small" className="text-xs font-medium text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>{rank}</Typography>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}          >
            <Typography variant="h6" color="blue-gray" className="mb-2"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}            >
              <CurrencyDollarIcon className="h-4 w-4 text-blue-gray-200" />            
              Liste de tous les ordres en attente
            </Typography>
          </CardHeader>
          <CardBody className="pt-0"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;

