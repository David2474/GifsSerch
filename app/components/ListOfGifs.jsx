"use client";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gift from "./Gifs";

export default function ListOfGifs({ keyword }) {
  const [gif, setGifts] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifts(gifs));
  }, [keyword]);

  return gif.map(({ title, id, url }) => (
    <Gift key={id} title={title} id={id} url={url} />
  ));
}
