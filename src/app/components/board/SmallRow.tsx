import Movement from "@/model/Movement";
import Position from "@/model/Position";
import getCommonColors from "@/utils/Colors";
import rows from "./Rows";

interface SmallRowProps {
  movement: Movement;
}

function SmallRow(props: SmallRowProps) {
  function getColor(position: Position | undefined, index: number) {
    if (!position) return "bg-cel";
    if (index > 0)
      return position.movementType === "initial-position"
        ? "bg-cyan-700"
        : "bg-green";

    return getCommonColors(position, props.movement);
  }
  return (
    <>
      {rows(props.movement, getColor, true).map((x, i) => {
        return (
          <div className="flex m-1" key={i}>
            <div>{x}</div>
          </div>
        );
      })}
    </>
  );
}

export default SmallRow;
