import Movement from "@/model/Movement";
import CommonCard from "../card/CommonCard";
import WayOfWindCard from "../card/WayOfWindCard";
import getDescription from "@/handler/Description";

interface UserCardProps {
  movement: Movement;
}

function UserCard(props: UserCardProps) {
  const description = getDescription(props.movement.name);

  if (props.movement.from !== "way-of-wind")
    return <CommonCard movement={props.movement} description={description} />;

  return <WayOfWindCard movement={props.movement} description={description} />;
}

export default UserCard;
