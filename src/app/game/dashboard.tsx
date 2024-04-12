// "use client";

// import React, { useEffect, useState } from "react";
// import fetchFinancialData from "../api/apiFinance";
// import Chart from "./ChartComponent";
// import { Routes, Route } from "react-router-dom";
// import { Cog6ToothIcon } from "@heroicons/react/24/solid";
// import { IconButton } from "@material-tailwind/react";
// import {
//   Sidenav,
//   DashboardNavbar,
//   Configurator,
//   Footer,
// } from "@/widgets/layout";
// import routes from "@/routes";
// import { useMaterialTailwindController, setOpenConfigurator } from "@/context";



// const Dashboard = () => {
//   const [financialDataAAPL, setFinancialDataAAPL] = useState(null);
//   const [financialDataSamsung, setFinancialDataSamsung] = useState(null);
//   const [financialDataGoogle, setFinancialDataGoogle] = useState(null);
//   // Add state variables for additional financial data here
//   const [controller, dispatch] = useMaterialTailwindController();
//   const { sidenavType } = controller;
  
//   useEffect(() => {
//     const fetchData = async (symbol: string, setter: { (value: React.SetStateAction<null>): void; (value: React.SetStateAction<null>): void; (value: React.SetStateAction<null>): void; (arg0: any): void; }) => {
//       try {
//         const data = await fetchFinancialData(symbol);
//         setter(data);
//       } catch (error) {
//         console.error(`Error fetching data for ${symbol}:`, error);
//       }
//     };

//     // Fetch data for AAPL
//     fetchData("AAPL", setFinancialDataAAPL);
//     // Fetch data for Samsung
//     fetchData("NVDA", setFinancialDataSamsung);
//     // Fetch data for Google
//     fetchData("GOOGL", setFinancialDataGoogle);
//     // Add fetch data for additional symbols here
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-3/4">
//         <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
//         {/* Add other dashboard elements here */}
//       </div>
//       <div className="w-1/4 ml-4 flex flex-col space-y-4">
//         <div className="bg-white shadow-md p-4 flex-grow">
//           <h2 className="text-xl font-bold mb-2">AAPL Chart</h2>
//           <div className="flex-grow">
//             {financialDataAAPL ? (
//               <Chart Data={financialDataAAPL} />
//             ) : (
//               <p className="text-center">Loading data...</p>
//             )}
//           </div>
//         </div>
//         <div className="bg-white shadow-md p-4 flex-grow">
//           <h2 className="text-xl font-bold mb-2">Samsung Chart</h2>
//           <div className="flex-grow">
//             {financialDataSamsung ? (
//               <Chart Data={financialDataSamsung} />
//             ) : (
//               <p className="text-center">Loading data...</p>
//             )}
//           </div>
//         </div>
//         <div className="bg-white shadow-md p-4 flex-grow">
//           <h2 className="text-xl font-bold mb-2">Google Chart</h2>
//           <div className="flex-grow">
//             {financialDataGoogle ? (
//               <Chart Data={financialDataGoogle} />
//             ) : (
//               <p className="text-center">Loading data...</p>
//             )}
//           </div>
//         </div>
//         {/* Add additional chart components here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "./widgets/cards";
import { StatisticsChart } from "./widgets/charts";
import {
  statisticsCardsData,
  projectsTableData,
  ordersOverviewData,
  fetchstatisticsChartsData,
} from "./data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import {TimeRangeButtons} from "../../components"

export function Dashboard() {
  
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



  function handleSelect(range: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
     <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      
     {loading ? (
  <p>Loading...</p>
) : (
  statisticsChartsData.map((props) => (
    <StatisticsChart
      key={props.title}
      {...props}
      style={{ height: '1000px' }}

      footer={<TimeRangeButtons onSelect={(range: any) => handleSelect(range)} />}
    />
  ))
)}
</div>


      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
   
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Team
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>Day 1</strong> 
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <MenuItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Action</MenuItem>
                <MenuItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Another Action</MenuItem>
                <MenuItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Members", "Money","Rank"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({name, rank, budget }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                            {rank}
                          </Typography>               
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <Typography variant="h6" color="blue-gray" className="mb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
                      className="block font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
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

