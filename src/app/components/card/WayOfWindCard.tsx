import RootCard from "./RootCard";
import Identification from "../Identification";
import Label from "../Label";
import CardProps from "./CardProps";
import Position from "@/model/Position";
import getCommonColors from "@/utils/Colors";
import rows from "../board/Rows";
import BoardTypeText from "./board/BoardTypeText";
import Movement from "@/model/Movement";
import Description from "@/model/Description";
import { ReactElement } from "react";

interface ViewProps {
  movement: Movement;
  description: Description;
  rows: ReactElement;
}

function WayOfWindCard({ movement, description }: CardProps) {
  function getColor(position: Position | undefined, index: number) {
    if (!position) return "bg-cel";
    if (index > 0)
      return position.movementType === "initial-position"
        ? "bg-cyan-700"
        : "bg-green";

    return getCommonColors(position, movement);
  }

  const Rows = () => {
    return (
      <>
        {rows(movement, getColor).map((x, i) => {
          return (
            <div className="flex items-center mx-1" key={i}>
              <div>{x}</div>
              <BoardPieceType movement={movement} index={i} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <LargeView
        movement={movement}
        description={description}
        rows={<Rows />}
      />
      <MobileView
        movement={movement}
        description={description}
        rows={<Rows />}
      />
    </>
  );
}

function LargeView({ description, movement, rows }: ViewProps) {
  return (
    <RootCard className="hidden sm:block" key={movement.name}>
      <div className="flex flex-cols p-2">
        <div className="flex flex-col justify-between content-center pr-3">
          <div className="flex flex-col justify-center h-[65%]">
            <Identification
              startWith={movement.startWith}
              symbol={movement.symbol}
              useSymbol={description.useSymbol}
              name={description.name}
              description={description.description}
            />
          </div>

          <div className="min-h-[60px] hidden sm:block">
            <Label
              class="w-[340px]"
              color={movement.color}
              startWith={movement.startWith}
              description={description.description}
            />
          </div>
        </div>
        <div className="flex flex-col">{rows}</div>
      </div>
    </RootCard>
  );
}

function MobileView({ description, movement, rows }: ViewProps) {
  return (
    <RootCard className="flex md:hidden " key={movement.name}>
      <div className="flex justify-around w-full">
        <div className="min-w-[90px] flex justify-center">
          <Identification
            className="text-2xl"
            startWith={movement.startWith}
            symbol={movement.symbol}
            useSymbol={description.useSymbol}
            name={description.name}
            description={description.description}
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex justify-center">{rows}</div>
            <p className="text-[8px] text-black text-center m-1">
              Mova o aluno ou mestre como exibido, e então mova o espírito do
              vento.
            </p>
          </div>
        </div>
      </div>
    </RootCard>
  );
}

function BoardPieceType({
  movement,
  index,
}: {
  movement: Movement;
  index: number;
}) {
  return (
    <BoardTypeText
      boardLength={movement.board.length}
      text={index === 0 ? "aluno/mestre" : "espirito"}
    />
  );
}

export default WayOfWindCard;
