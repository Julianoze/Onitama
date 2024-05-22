import Movement from "@/model/Movement";
import Position from "@/model/Position";

const getCommonColors = (position : Position | undefined, movement : Movement) =>  {
  if (!position) return 'bg-cel';
  if (position.movementType === "initial-position") return 'bg-black';

  return 'bg-' + movement.color;
}

export default getCommonColors;
