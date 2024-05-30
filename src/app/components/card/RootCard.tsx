interface RootCardProps {
  className?: string;
  children: React.ReactNode;
}

function RootCard(props: RootCardProps) {
  return (
    <div
      className={`bg-card border-2 drop-shadow-sm rounded-lg bg-[url('/img/card.png')] bg-no-repeat bg-center p-1 mx-2 my-1 md:w-[500px] min-h-[110px] ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default RootCard;
