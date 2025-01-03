"use client";
import { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

export default function Home() {
  const [keyword, setKeyword] = useState("vini");

  return (
    <div className="flex flex-col w-screen h-screen)">

      <div className="flex  my-4">
        <h1 className="text-[#e9e9e9] font-semibold text-xl text-right">GifGenerate</h1>
        <input
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          className="text-black border border-black p-1 rounded-sm"
        />
      </div>

      <div className="flex justify-center flex-wrap">
        <ListOfGifs keyword={keyword} />
      </div>
    </div>
  );
}
