"use client";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Gifs({ title, url }) {
  const [showAlert, setShowAlert] = useState(false)


  function handleCopy() {
    navigator.clipboard.writeText(url)
    .then(() => {
      setShowAlert(true)
      setTimeout(() =>{
        setShowAlert(false)
      }, 2000)
    })
    .catch(err => {
      alert('Error al copiar: ' + err);
    });
  }

  return (
    <>

    <img 
      src={url} 
      alt={title} 
      onClick={handleCopy} 
      className="w-30 h-25" 
      />

    {
      showAlert && (
        <div className="fixed bg-black inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <Alert className="w-2/6 ">
            <AlertDescription>
              <p className="font-semibold text-lg">Texto copido con exito!!</p>
            </AlertDescription>
          </Alert>
        </div>
      )
    }
    </>
  );
}
