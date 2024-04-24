'use client'

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Ordre, ordreAchat } from "./ordrefunctions";

export const DialogAchat: React.FC<Ordre> = ({ player, game, openValue,symbol }) => {
  const [open, setOpen] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(openValue); // State to hold the price
  const [quantity, setQuantity] = useState(0); // State to hold the quantity

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle isChecked state
  };

  const achat = () => {
    console.log("ACHAT")
    handleOpen();
    ordreAchat(player, game, isChecked, price, quantity,symbol);
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
      className="px-8 py-8 mr-8 bg-green-500 text-white rounded-md focus:outline-none w-100"
        onClick={handleOpen}
        variant="gradient"
        placeholder={null}
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        Achat
      </Button>
      <Dialog open={open} handler={handleOpen} placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80"> {/* Ajoutez la classe bg-white pour définir un arrière-plan blanc */}
          <div className="border border-black p-4 rounded-lg bg-white">
            <DialogHeader placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>Ordre d'achat</DialogHeader>
            <DialogBody placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <div className="mt-2 flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Ordre à la limite</span>
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Ordre au marché</span>
                </label>
              </div>
              <div className=" mt-2 mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix d'achat :</label>
                <input
                  type="number"
                  id="price"
                  placeholder={openValue.toLocaleString()}
                  className={`border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 ${isChecked ? 'bg-gray-200' : ''}`}
                  disabled={isChecked} // Disable the input when isChecked is true
                  onChange={(e) => setPrice(Number(e.target.value))} // Update price state when input changes
                />
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité à acheter :</label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Entrez la quantité à acheter"
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setQuantity(Number(e.target.value))} // Update quantity state when input changes
                />
              </div>
            </DialogBody>
            <DialogFooter placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
              <Button variant="text" color="red" onClick={handleOpen} className="mr-1" placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <span>Annuler</span>
              </Button>
              <Button variant="text" color="red" onClick={achat} className="mr-1" placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
                <span>Confirmer l'achat</span>
              </Button>
            </DialogFooter>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DialogAchat;
