interface MovementNameProps {
  className?: string;
  name: string;
}

function MovementName(props: MovementNameProps) {
  return (
    <p className={`uppercase font-bold text-black ${props.className}`}>
      {props.name}
    </p>
  );
}

export default MovementName;
