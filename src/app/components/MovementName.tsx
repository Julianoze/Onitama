interface MovementNameProps {
  name : string
}

function MovementName(props : MovementNameProps) {
  return (
    <p className="uppercase text-2xl font-bold text-black">{props.name}</p>
  )
}

export default MovementName;