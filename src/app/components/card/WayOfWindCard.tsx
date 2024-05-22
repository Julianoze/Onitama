import RootCard from "./RootCard";
import Identification from "../Identification";
import Label from "../Label";
import CardProps from "./CardProps";
import Rows from "../board/Rows";
import Position from "@/model/Position";
import Board from "@/model/Board";
import getCommonColors from "@/utils/Colors";

function WayOfWindCard({ movement, description } : CardProps) {
  const getColor = (position : Position | undefined, index : number) =>  {
    if(!position) return 'bg-cel';
    if(index > 0)
      return position.movementType === "initial-position" ? 'bg-cyan-700' : 'bg-green';

    return getCommonColors(position, movement);
  }

  return (
    <RootCard key={movement.name}>
      <div className="flex flex-cols p-2">
        <div className="flex flex-col justify-between content-center pr-3">
            <div className="flex justify-center h-[65%]">
              <Identification
                symbol={movement.symbol}
                useSymbol={description.useSymbol}
                name={description.name}
                description={description.description} />
            </div>
            <div className="min-h-[60px] hidden sm:block">
              <Label
                color={movement.color}
                startWith={movement.startWith}
                description={description.description}
                />
            </div>
        </div>
        <Rows
          movement={movement}
          getColor={getColor}/>
      </div>
    </RootCard>
  )
}

export default WayOfWindCard;