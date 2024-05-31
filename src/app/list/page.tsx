"use client";

import MOVEMENTS from "@/data/Movements";
import Movement from "@/model/Movement";
import List from "../components/list/List";

export default function Page() {
  const getCardsOrigin = () => {
    return MOVEMENTS.reduce((previous: string[], current: Movement) => {
      if (previous.includes(current.from)) return previous;

      return [...previous, current.from];
    }, []);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-black"></div>
      <div className="bg-green"></div>
      <div className="bg-cyan-700"></div>

      <div className="flex flex-col md:items-center">
        {getCardsOrigin().map((origin) => {
          return <List origin={origin} key={origin} />;
        })}
      </div>
    </div>
  );
}
