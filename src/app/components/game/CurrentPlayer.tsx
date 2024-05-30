import Description from "@/model/Description";
import SmallRow from "../board/SmallRow";
import Movement from "@/model/Movement";
import getDescription from "@/handler/Description";

interface CurrentPlayerProps {
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
    <div className={`rotate-${props.movement.startWith} m-1`}>
      <div className="w-full flex justify-around bg-card border-2 drop-shadow-sm rounded-lg bg-[url('/img/card.png')] bg-no-repeat bg-center p-1 mx-2 my-1 md:w-[500px] min-h-[132p]">
        <Small />
        <div className="rotate-[-180deg]">
          <Small />
        </div>
      </div>
    </div>
  );
}

export default CurrentPlayer;
