import SmallRow from "../board/SmallRow";
import Movement from "@/model/Movement";
import getDescription from "@/handler/Description";
import Player from "@/model/Player";

interface CurrentPlayerProps {
  startWith: Player;
  movement: Movement;
}

function CurrentPlayer(props: CurrentPlayerProps) {
  const description = getDescription(props.movement.name);

  const Small = () => {
    return (
      <div className="flex">
        <p className="flex items-center text-sm font-bold">
          {description.name}
        </p>
        <SmallRow movement={props.movement} />
      </div>
    );
  };

  return (
    <div className="flex w-full justify-center">
      <div className={`w-full md:w-fit rotate-${props.startWith} m-1`}>
        <div className="w-full flex justify-around items-center bg-card border-2 drop-shadow-sm rounded-lg bg-[url('/img/card.png')] bg-no-repeat bg-center p-1 mx-2 my-1 md:w-[500px] min-h-[68px]">
          <Small />
          <div className="rotate-[-180deg]">
            <Small />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlayer;
