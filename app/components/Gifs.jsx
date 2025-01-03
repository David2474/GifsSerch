"use client";
import { useState } from "react";
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
          <Alert className="w-4/12 ">
          <AlertTitle>
            <Terminal className="h-4 w-4" />
          </AlertTitle>
            <AlertDescription>
              <p className="font-semibold text-lg text-[#3b3736]">Texto copido con exito!!</p>
            </AlertDescription>
          </Alert>
        </div>
      )
    }
    </>
  );
}
