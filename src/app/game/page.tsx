"use client";

import MOVEMENTS from "@/data/Movements";
import CurrentPlayer from "../components/game/CurrentPlayer";
import UserCard from "../components/game/UserCard";
import { useEffect, useState } from "react";
import { consecutiveUniqueRandom } from "unique-random";
import Movement from "@/model/Movement";
import Player from "@/model/Player";

enum LastPlay {
  Blue = 0 | 1,
  Red = 3 | 4,
}

function Page() {
  const [loading, setLoading] = useState(true);
  const [nextPlayer, setNextPlayer] = useState<Player>(Player.Red);
  const [playerCards, setPlayerCards] = useState<Movement[]>([]);

  const [nextCard, setNextCard] = useState<Movement>({} as Movement);

  useEffect(() => {
    const gameMovements: Movement[] = [];
    const random = consecutiveUniqueRandom(0, 15);

    for (let i = 0; i < 5; i++) {
      gameMovements.push(MOVEMENTS.filter((x) => x.from === "base")[random()]);
    }

    const next = gameMovements[2];

    setNextCard(next);
    setNextPlayer(next.startWith);

    setPlayerCards(gameMovements);

    setLoading(false);
  }, []);

  if (loading) return <></>;

  const allowedMove = (position: LastPlay) => {
    if (position <= LastPlay.Blue) return nextPlayer == Player.Red;
    return nextPlayer == Player.Blue;
  };

  const onClick = (movement: Movement) => {
    const position = playerCards.indexOf(movement) as LastPlay;

    if (allowedMove(position)) {
      return;
    }

    const card = playerCards[position];
    setPlayerCards((cards) => {
      cards[position] = nextCard;

      return cards;
    });

    setNextCard(card);
    setNextPlayer((x) => (x === Player.Red ? Player.Blue : Player.Red));
  };

  const FieldGame = ({ player }: { player: Player }) => {
    const cardId = player === Player.Blue ? 3 : 0;

    return (
      <div
        className={`md:flex w-full justify-center
        ${player === Player.Red ? "rotate-[-180deg]" : ""}
        ${nextPlayer === player ? "saturate" : "desaturate"}`}
      >
        <UserCard onClick={onClick} movement={playerCards[0 + cardId]} />
        <UserCard onClick={onClick} movement={playerCards[1 + cardId]} />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-black"></div>
      <div className="bg-green"></div>
      <div className="bg-cyan-700"></div>
      <FieldGame player={Player.Red} />
      <CurrentPlayer startWith={nextPlayer} movement={nextCard} />
      <FieldGame player={Player.Blue} />
    </div>
  );
}

export default Page;
