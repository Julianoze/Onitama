interface CelProps {
  color : string
}

function Cel(props : CelProps) {
  return (<div className={`h-6 w-6 ${props.color} border-[1px] border-cel`} />)
}

export default Cel;