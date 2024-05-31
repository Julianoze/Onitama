import Movement from "@/model/Movement";
import CommonCard from "../card/CommonCard";
import WayOfWindCard from "../card/WayOfWindCard";
import getDescription from "@/handler/Description";

interface UserCardProps {
  movement: Movement;
  onClick?: (movement: Movement) => void;
}

function UserCard({ movement, onClick }: UserCardProps) {
  const description = getDescription(movement.name);

  return (
    <div
      onClick={() => {
        onClick?.(movement);
      }}
    >
      {movement.from === "way-of-wind" ? (
        <WayOfWindCard movement={movement} description={description} />
      ) : (
        <CommonCard movement={movement} description={description} />
      )}
    </div>
  );
}

export default UserCard;
