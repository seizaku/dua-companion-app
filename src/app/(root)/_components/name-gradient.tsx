"use client";

import { useEffect, useState } from "react";
import { NAMES_OF_ALLAH } from "@/constants/names";

interface ApiData {
  name?: string;
  transliteration?: string;
  number?: number;
  en?: { meaning: string };
}

const getRandomColorShades = () => {
  let hue = Math.floor(Math.random() * 360);

  let shades = [
    `hsl(${hue}, 100%, 90%)`, // light shade
    `hsl(${hue}, 100%, 80%)`, // normal shade
    `hsl(${hue}, 100%, 60%)`, // dark shade
    `hsl(${hue}, 100%, 40%)`, // dark shade
  ];
  return `linear-gradient(to bottom, ${shades.join(", ")})`;
};

export const NameGradient = ({ color }: { color: string }) => {
  const [name, setName] = useState<ApiData>();
  const [gradient, setGradient] = useState(getRandomColorShades());

  async function fetchName() {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    let { name, en } = NAMES_OF_ALLAH[randomNumber];
    setName({ name, en });
  }

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div
      className={`flex flex-col justify-end w-2/4 rounded px-4 pb-12`}
      style={{
        background: gradient,
      }}
    >
      <h5 className="text-lg font-medium text-white">{name?.name}</h5>
      <span className="text-xs text-white">{name?.en?.meaning}</span>
    </div>
  );
};
