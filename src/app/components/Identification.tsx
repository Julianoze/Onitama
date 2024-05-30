import Illustration from "./Illustration";
import MovementName from "./MovementName";

interface IdentificationProps {
  className?: string;
  startWith: string;
  useSymbol: boolean;
  symbol: string;
  name: string;
  description: string;
}

function Identification(props: IdentificationProps) {
  return (
    <div
      className={`flex flex-col w-full items-center justify-center ${
        props.startWith === "blue"
          ? "bg-[url('/img/circle-blue.png')]"
          : "bg-[url('/img/circle-red.png')]"
      } bg-no-repeat bg-center`}
    >
      <Illustration
        className={props.className}
        symbol={props.symbol}
        name={props.name}
        useSymbol={props.useSymbol}
      />
      <MovementName name={props.name} />
    </div>
  );
}

export default Identification;
