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

interface ViewProps {
  movement: Movement;
  description: Description;
  getColor: (position: Position | undefined, index: number) => string;
}

function WayOfWindCard({ movement, description }: CardProps) {
  // TODO: add translate line 110, 111
  // TODO: add translate line 121
  function getColor(position: Position | undefined, index: number) {
    if (!position) return "bg-cel";
    if (index > 0)
      return position.movementType === "initial-position"
        ? "bg-cyan-700"
        : "bg-green";

    return getCommonColors(position, movement);
  }
  return (
    <>
      <LargeView
        movement={movement}
        description={description}
        getColor={getColor}
      />
      <MobileView
        movement={movement}
        description={description}
        getColor={getColor}
      />
    </>
  );
}

function LargeView({ description, movement, getColor }: ViewProps) {
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
        <div className="flex flex-col">
          {rows(movement, getColor).map((x, i) => {
            return (
              <>
                <div className="flex items-center mb-1" key={i}>
                  <div>{x}</div>
                  <BoardPieceType movement={movement} index={i} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </RootCard>
  );
}

function MobileView({ description, movement, getColor }: ViewProps) {
  return (
    <RootCard className="flex md:hidden " key={movement.name}>
      <div className="flex justify-around w-full">
        <div className="min-w-[90px] flex justify-center">
          <Identification
            startWith={movement.startWith}
            symbol={movement.symbol}
            useSymbol={description.useSymbol}
            name={description.name}
            description={description.description}
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex">
              {rows(movement, getColor).map((x, i) => {
                return (
                  <>
                    <div className="flex items-center mx-1" key={i}>
                      <div>{x}</div>
                      <BoardPieceType movement={movement} index={i} />
                    </div>
                  </>
                );
              })}
            </div>
            <p className="text-[8px] text-black text-center m-1">
              Move your student or Master as shown above, then move the Wind
              Spirit as shown below.
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
