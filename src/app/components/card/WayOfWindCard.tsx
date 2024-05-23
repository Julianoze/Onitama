import RootCard from "./RootCard";
import Identification from "../Identification";
import Label from "../Label";
import CardProps from "./CardProps";
import Position from "@/model/Position";
import getCommonColors from "@/utils/Colors";
import rows from "../board/Rows";

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
        <div className="flex flex-col">
          {rows(movement, getColor).map((x, i) => {
            return <div className="content-center md:mb-1" key={i}>{x}</div>
          })}
        </div>
      </div>
    </RootCard>
  )
}

export default WayOfWindCard;