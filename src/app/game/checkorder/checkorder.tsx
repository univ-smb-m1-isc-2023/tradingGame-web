    "use client";

    import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
    import React, { useEffect, useState } from "react";
    import { ordersOverviewDataonPending } from "../data";
    import { Game } from "../interface/Game";
    import { PlayerInfo } from "../interface/PlayerInfo";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

    interface CheckOrderProps {
        game: Game |null;
        player: PlayerInfo |null;
    }
    
    const CheckOrder: React.FC<CheckOrderProps> = ({ game, player }) => {
        const [loading, setLoading] = useState(true);
        const [ordersOverviewData, setOrdersOverviewData] = useState<any[]>([]);
    

        useEffect(() => {
            const fetchData = async () => {
                try {

                    if (game && player) {
                        const dataPendingOrders = await ordersOverviewDataonPending(game.id.toLocaleString(), player);
                        setOrdersOverviewData(dataPendingOrders);
                        setLoading(false);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setLoading(false); // Make sure to set loading to false even if there's an error
                }
            };

            fetchData();

        }, []); // Depend on searchParams to trigger useEffect when searchParams change

        if (loading) {
            return <div>Loading...</div>; // Render a loading indicator
        }
    
        return (
            <CardBody className="pt-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
                {ordersOverviewData && ordersOverviewData.length > 0 ? (
                    ordersOverviewData.map(({ icon, color, title, description }, key) => (
                        <div key={title} className="flex items-start gap-4 py-3">
                            <div className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1
                                ? "after:h-0"
                                : "after:h-4/6"}`}>
                                {React.createElement(icon, {
                                    className: `!w-5 !h-5 ${color}`,
                                })}
                            </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="block font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {title}
                                </Typography>
                                <Typography as="span" variant="small" className="text-xs font-medium text-blue-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {description}
                                </Typography>
                            </div>
                        </div>
                    ))
                ) : (
                    <Typography variant="small" color="blue-gray" className="block font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        --Aucun ordre de cette date--
                    </Typography>
                )}
            </CardBody>
        );
    }

    export default CheckOrder;

