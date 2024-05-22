interface LabelProps {
  color : string;
  startWith: string;
  description: string
}

function Label(props : LabelProps) {

  const getLabelColor = () => {
    if(props.color === 'red') return 'bg-red/10';
    if(props.color === 'blue') return 'bg-blue/10';
    return 'bg-green/10';
  }

  const getStartWithColor = () => {
    return props.startWith === 'blue' ? 'bg-blue' : 'bg-red';
  }

  return (
    <div className={`flex p-1 h-[100%] justify-around items-center ${ getLabelColor() }`}>
      <span className="text-[11px] text-center tracking-tighter	">{props.description}</span>
      <div className={`${getStartWithColor()} min-h-4 max-h-4 min-w-6 m-2`}></div>
    </div>
  )
}

export default Label;