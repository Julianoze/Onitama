interface RootCardProps {
  children : React.ReactNode
}

function RootCard(props : RootCardProps) {
  return (
    <div className="bg-card border-2 drop-shadow-sm rounded-lg bg-[url('/img/card.png')] bg-no-repeat bg-center p-1 mx-2 my-1 max-w-[500px]">
      {props.children}
    </div>
  )
}

export default RootCard;