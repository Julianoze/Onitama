import RootCard from "./RootCard";
import Identification from "../Identification";
import Label from "../Label";
import CardProps from "./CardProps";
import Position from "@/model/Position";
import getCommonColors from "@/utils/Colors";
import rows from "../board/Rows";
import BoardTypeText from "./board/BoardTypeText";

function CommonCard({ movement, description }: CardProps) {
  const getColor = (position: Position | undefined) => {
    return getCommonColors(position, movement);
  };

  const BoardLabel = ({ index }: { index: number }) => {
    if (index !== 0 || movement.board.length <= 1) return <></>;
    return <p className="text-sm text-black font-bold text-center">ou</p>;
  };

  const Rows = () => {
    return (
      <div className="flex flex-col justify-center">
        {rows(movement, getColor).map((x, i) => {
          return (
            <div key={i}>
              <div className="flex content-center md:mb-1 items-center">
                <div>{x}</div>
                <BoardTypeText
                  boardLength={movement.board.length}
                  text={i === 0 ? "aluno" : "mestre"}
                />
              </div>
              <BoardLabel index={i} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <RootCard key={movement.name}>
      <div className="flex">
        <div className="flex justify-center w-[65%]">
          <Identification
            startWith={movement.startWith}
            symbol={movement.symbol}
            useSymbol={description.useSymbol}
            name={description.name}
            description={description.description}
          />
        </div>
        <Rows />
      </div>
      <div className="min-h-[40px] hidden sm:block">
        <Label
          color={movement.color}
          startWith={movement.startWith}
          description={description.description}
        />
      </div>
    </RootCard>
  );
}

export default CommonCard;
