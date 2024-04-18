"use client";

import React from "react";
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
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
 
export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 h-full"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://media.tenor.com/K_8abXDQ5wsAAAAe/stonks-up.png" alt="brand" className="h-12 w-12" />
        <Typography variant="h5" color="blue-gray"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          Yvann
        </Typography>
      </div>
      <List  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <Accordion
          open={open === 1}
          icon={<ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}        >
          <ListItem className="p-0" selected={open === 1}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                Game
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <a href="./game?gameID=1&playerID=2" className="text-blue-gray-600 hover:text-blue-gray-800">Dashboard</a>
              </ListItem>
              <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <a href="./game/details?gameID=1&playerID=2" className="text-blue-gray-600 hover:text-blue-gray-800">Acheter une action</a>

              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}        >
          <ListItem className="p-0" selected={open === 2}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <a href="https://your-website-url.com" className="text-blue-gray-600 hover:text-blue-gray-800">Mes ordres</a>
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <a href="./game?" className="text-blue-gray-600 hover:text-blue-gray-800">Mon Historique</a>

              </ListItem>
              <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Historiques
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Menu
          <ListItemSuffix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <ListItemPrefix  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    
    </Card>
  );
}