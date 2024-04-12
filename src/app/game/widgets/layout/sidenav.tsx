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
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Sidebar
        </Typography>
      </div>
      <List  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Accordion
          open={open === 1}
          icon={<ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <ListItem className="p-0" selected={open === 1}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Game
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
              <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Actions
              </ListItem>
              <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Players
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <ListItem className="p-0" selected={open === 2}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Game
          <ListItemSuffix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
          and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}