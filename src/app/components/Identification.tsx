import Illustration from "./Illustration";
import MovementName from "./MovementName";

interface IdentificationProps {
  useSymbol: boolean;
  symbol : string;
  name : string;
  description: string;
}

function Identification(props: IdentificationProps) {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('/img/circle.png')] bg-no-repeat bg-center">
        <Illustration
          symbol={props.symbol}
          name={props.name}
          useSymbol={props.useSymbol}
        />
        <MovementName name={props.name} />
    </div>
  )
}

export default Identification;