"use client";

import MOVEMENTS from "@/data/Movements";
import CurrentPlayer from "../components/game/CurrentPlayer";
import UserCard from "../components/game/UserCard";
import { useEffect, useState } from "react";
import { consecutiveUniqueRandom } from "unique-random";
import Movement from "@/model/Movement";
import Player from "@/model/Player";

enum Cards {
  Blue = 0 | 1,
  Red = 3 | 4,
  Next = 2,
}

function Page() {
  const [loading, setLoading] = useState(true);
  const [nextPlayer, setNextPlayer] = useState<Player>(Player.Red);
  const [gameCards, setGameCards] = useState<number[]>([]);

  useEffect(() => {
    const cards: number[] = [];
    const consecutiveRandom = consecutiveUniqueRandom(0, 15);
    for (let i = 0; i < 5; ) {
      const random = consecutiveRandom();

      if (!cards.includes(random)) {
        cards.push(random);
        i++;
      }
    }

    const next = cards[2];

    setNextPlayer(MOVEMENTS[next].startWith);

    setGameCards(cards);
    setLoading(false);
  }, []);

  if (loading) return <></>;

  const allowedMove = (position: Cards) => {
    if (position <= Cards.Blue) return nextPlayer == Player.Red;
    return nextPlayer == Player.Blue;
  };

  function cloneValue<T>(value: T) {
    return JSON.parse(JSON.stringify(value)) as T;
  }

  const onClick = (movement: Movement) => {
    const index = MOVEMENTS.indexOf(movement);
    const position = gameCards.indexOf(index) as Cards;

    if (allowedMove(position)) {
      return;
    }

    setNextPlayer((x) => (x === Player.Red ? Player.Blue : Player.Red));

    setGameCards((cards) => {
      const cardsClone = cloneValue<number[]>(cards);

      cardsClone[position] = cloneValue<number>(cards[Cards.Next]);
      cardsClone[Cards.Next] = cloneValue<number>(index);

      return cardsClone;
    });
  };

  const FieldGame = ({ player }: { player: Player }) => {
    const cardId = player === Player.Blue ? 3 : 0;

    return (
      <div
        className={`md:flex w-full justify-center
        ${player === Player.Red ? "rotate-[-180deg]" : ""}
        ${nextPlayer === player ? "saturate" : "desaturate"}`}
      >
        <UserCard
          onClick={onClick}
          movement={MOVEMENTS[gameCards[0 + cardId]]}
        />
        <UserCard
          onClick={onClick}
          movement={MOVEMENTS[gameCards[1 + cardId]]}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-black"></div>
      <div className="bg-green"></div>
      <div className="bg-cyan-700"></div>
      <FieldGame player={Player.Red} />
      <CurrentPlayer
        startWith={nextPlayer}
        movement={MOVEMENTS[gameCards[Cards.Next]]}
      />
      <FieldGame player={Player.Blue} />
    </div>
  );
}

export default Page;
