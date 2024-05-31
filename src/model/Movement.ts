import Board from "./Board";
import Player from "./Player";

interface Movement {
  from: string;
  symbol: string;
  name: string;
  color: "blue" | "green" | "red";
  startWith: Player;
  board: Board[];
}

export default Movement;
