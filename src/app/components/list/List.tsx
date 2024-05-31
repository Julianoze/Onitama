import MOVEMENTS from "@/data/Movements";
import RootCard from "../card/RootCard";
import { useState } from "react";
import UserCard from "../game/UserCard";

interface ListProps {
  origin: string;
}

function List(props: ListProps) {
  const [listOpen, setListOpen] = useState(true);

  return (
    <>
      <div onClick={() => setListOpen((state) => !state)}>
        <RootCard className="min-h-[20px] mt-4">
          <p className="font-bold uppercase m-1">{props.origin}</p>
        </RootCard>
      </div>
      {listOpen &&
        MOVEMENTS.filter((movement) => movement.from === props.origin).map(
          (movement, i) => {
            return <UserCard movement={movement} key={i} />;
          }
        )}
    </>
  );
}

export default List;
