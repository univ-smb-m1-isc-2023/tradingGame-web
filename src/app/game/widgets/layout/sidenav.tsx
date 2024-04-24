"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Game } from "../../interface/Game";
import { PlayerInfo } from "../../interface/PlayerInfo";
import { findWallet } from "../../data";
import { Wallet, WalletPlayer } from "../../interface/Wallet";

export function Sidebar({
  player,
  game,
}: {
  player: PlayerInfo | null;
  game: Game | null;
}) {
  const [open, setOpen] = React.useState(0);
  const [myWallet, setWallet] = useState<WalletPlayer | null>(null);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        if (game != null && player != null) {
          const wallet = await findWallet(game.id.toLocaleString(), player);
          if (wallet != null) {
            setWallet(wallet);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWallet(); // Call fetchData directly inside useEffect
  }, []); // Empty dependency array to run once on mount

  return (
    <Card
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 h-full"
      placeholder={null}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
    >
      {game &&
        player && ( // Check if both game and player are not null
          <>
            <div className="mb-4 flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <img
                src="https://media.tenor.com/K_8abXDQ5wsAAAAe/stonks-up.png"
                alt="brand"
                className="h-12 w-12 rounded-full"
              />

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-blue-gray-700">
                  {player?.username}
                </h4>
                <p className="text-s  text-blue-gray-700">
                  {"Money : " + myWallet?.availableBalance.toFixed(2)}€
                </p>
                <p className="text-s  text-blue-gray-700">
                  {"Wallet :  " + myWallet?.balance.toFixed(2)}€
                </p>
              
              </div>
            </div>
            <List
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
              >
                <ListItem
                  className="p-0"
                  selected={open === 1}
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                  >
                    <ListItemPrefix
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      Game
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List
                    className="p-0"
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                  >
                    <ListItem
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ListItemPrefix
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                      >
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <a
                        href={`../game?gameID=${game.id}&playerID=${player.id}`}
                        className="text-blue-gray-600 hover:text-blue-gray-800"
                      >
                        Dashboard
                      </a>
                    </ListItem>
                    <ListItem
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ListItemPrefix
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                      >
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <a
                        href={`../game/details?gameID=${game.id}&playerID=${player.id}`}
                        className="text-blue-gray-600 hover:text-blue-gray-800"
                      >
                        Acheter une action
                      </a>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
              >
                <ListItem
                  className="p-0"
                  selected={open === 2}
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                  >
                    <ListItemPrefix
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      Ordre
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List
                    className="p-0"
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                  >
                    <ListItem
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ListItemPrefix
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                      >
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <a
                        href={`../game/checkorder?gameID=${game.id}&playerID=${player.id}`}
                        className="text-blue-gray-600 hover:text-blue-gray-800"
                      >
                        Mes Ordres
                      </a>
                    </ListItem>
                    <ListItem
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ListItemPrefix
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                      >
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <a
                        href={`../game/checkhistorical?gameID=${game.id}&playerID=${player.id}`}
                        className="text-blue-gray-600 hover:text-blue-gray-800"
                      >
                        Mon historique
                      </a>
                    </ListItem>
                    <ListItem
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                    >
                      <ListItemPrefix
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                      >
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <a
                        href={`../game/checkcurrentactions?gameID=${game.id}&playerID=${player.id}`}
                        className="text-blue-gray-600 hover:text-blue-gray-800"
                      >
                        Mes actions
                      </a>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
              <ListItem
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
              >
                <ListItemPrefix
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}
                >
                  <QueueListIcon className="h-5 w-5" />
                </ListItemPrefix>
                <a href={`../gamelist?playerID=${player.id}`}
                  className="text-blue-gray-600 hover:text-blue-gray-800"
                    >

                  Gamelist</a>
              </ListItem>
            </List>
          </>
        )}
    </Card>
  );
}
