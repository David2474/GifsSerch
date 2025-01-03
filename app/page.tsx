"use client"
import { ReactElement, useState } from "react"
import ListOfGifs from "./components/ListOfGifs"
import InputKeyword from "./components/InputKeyword"

export default function Home() {
  const [keyword, setKeyword] = useState("vini jr")

  function handleKeyword (event: React.ChangeEvent<HTMLInputElement>){
    setKeyword(event.target.value)
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <InputKeyword handleKeyword={handleKeyword}/>

      <div className="flex justify-center flex-wrap">
        <ListOfGifs keyword={keyword} />
      </div>
    </div>
  );
}
