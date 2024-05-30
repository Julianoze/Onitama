"use client";

import MOVEMENTS from "@/data/Movements";
import Movement from "@/model/Movement";
import CurrentPlayer from "./components/game/CurrentPlayer";
import UserCard from "./components/game/UserCard";
import { useEffect, useState } from "react";
import { consecutiveUniqueRandom } from "unique-random";

export default function Home() {
  // TODO: add translate commom cards, way of wind
  // TODO: update random behaviour
  // TODO: fix border loading on md

  const [loading, setLoading] = useState(true);
  const [player1Cards, setPlayer1Cards] = useState<Movement[]>([]);
  const [player2Cards, setPlayer2Cards] = useState<Movement[]>([]);

  const [nextCard, setNextCard] = useState<Movement>({} as Movement);

  useEffect(() => {
    const gameMovements: Movement[] = [];
    const random = consecutiveUniqueRandom(0, 52);

    for (let i = 0; i < 5; i++) {
      gameMovements.push(MOVEMENTS[random()]);
    }

    setNextCard(gameMovements[2]);

    setPlayer1Cards(gameMovements.slice(0, 2));
    setPlayer2Cards(gameMovements.slice(3));

    setLoading(false);
  }, []);

  if (loading) return <></>;

  return (
    <div className="flex flex-col w-full ">
      <div className="bg-black"></div>
      <div className="bg-green"></div>
      <div className="bg-cyan-700"></div>
      <div className="md:flex w-full justify-center rotate-[-180deg]">
        <UserCard movement={player1Cards[0]} />
        <UserCard movement={player1Cards[1]} />
      </div>
      <CurrentPlayer movement={nextCard} />
      <div className="md:flex w-full justify-center">
        <UserCard movement={player2Cards[0]} />
        <UserCard movement={player2Cards[1]} />
      </div>
    </div>
  );
}
