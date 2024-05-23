import RootCard from "./RootCard";
import Identification from "../Identification";
import Label from "../Label";
import CardProps from "./CardProps";
import Rows from "../board/Rows";
import Position from "@/model/Position";
import getCommonColors from "@/utils/Colors";
import rows from "../board/Rows";

function CommonCard({ movement, description } : CardProps) {
  const getColor = (position : Position | undefined) =>  {
    return getCommonColors(position, movement);
  }

  return (
    <RootCard key={movement.name}>
      <div className="flex">
        <div className="flex justify-center w-[65%]">
          <Identification
            symbol={movement.symbol}
            useSymbol={description.useSymbol}
            name={description.name}
            description={description.description} />
        </div>
        <div className="flex flex-col">
          {rows(movement, getColor).map((x, i) => {
            return <div className="content-center md:mb-1" key={i}>{x}</div>
          })}
        </div>
      </div>
      <div className="min-h-[40px] hidden sm:block">
        <Label
          color={movement.color}
          startWith={movement.startWith}
          description={description.description}
        />
      </div>
    </RootCard>
  )
}

export default CommonCard;