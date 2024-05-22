import Position from "./Position";

interface Board {
  rows?: number,
  description?: string,
  movements: Position[]
}

export default Board;