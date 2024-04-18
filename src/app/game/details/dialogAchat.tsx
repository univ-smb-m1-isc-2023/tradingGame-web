'use client'

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogAchat() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button className="px-4 py-4 mr-2 bg-green-500 text-white rounded-md focus:outline-none" onClick={handleOpen} variant="gradient"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        Achat
      </Button>
      <Dialog open={open} handler={handleOpen}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80"> {/* Ajoutez la classe bg-white pour définir un arrière-plan blanc */}
    <div className="border border-black p-4 rounded-lg bg-white">
      <DialogHeader  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>Achat  d'ordre de trading</DialogHeader>
      <DialogBody  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <div className="mb-4">
          <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700">Prix d'achat :</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Entrez le prix de vente"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité à acheter :</label>
          <input
            type="number"
            id="quantity"
            placeholder="Entrez la quantité à vendre"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Informations supplémentaires :</label>
          <textarea
            id="additionalInfo"
            rows={3}
            placeholder="Entrez des informations supplémentaires (facultatif)"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
      </DialogBody>
      <DialogFooter  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <span>Annuler</span>
        </Button>
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          <span>Confirmer la vente</span>
        </Button>
      </DialogFooter>
    </div>
  </div>
</Dialog>  
    </>
  );
}