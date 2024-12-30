"use client";
import { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

export default function Home() {
  const [keyword, setKeyword] = useState("vini");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ListOfGifs keyword={keyword} />
    </div>
  );
}