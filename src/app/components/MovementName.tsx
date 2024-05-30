interface MovementNameProps {
  name: string;
}

function MovementName(props: MovementNameProps) {
  return <p className="uppercase font-bold text-black">{props.name}</p>;
}

export default MovementName;
