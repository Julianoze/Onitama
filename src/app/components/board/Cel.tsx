interface CelProps {
  color: string;
  size?: number;
  useSmallRow: boolean | undefined;
}

function Cel(props: CelProps) {
  return (
    <div
      className={`${props.useSmallRow ? "h-2 w-2" : "h-5 w-5"} ${
        props.color
      } border-[1px] border-cel`}
    />
  );
}

export default Cel;
