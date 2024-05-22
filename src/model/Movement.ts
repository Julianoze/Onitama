import Board from "./Board"

interface Movement {
    from: string,
    symbol: string,
    name: string,
    color: "blue" | "green" | "red",
    startWith: "blue" | "red",
    board: Board[]
}

export default Movement