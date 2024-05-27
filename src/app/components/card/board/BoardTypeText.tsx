interface BoardTypeText {
  boardLength: number;
  text: string;
}

function BoardTypeText(props: BoardTypeText) {
  if (props.boardLength <= 1) return <></>;

  return (
    <p
      className="origin-bottom text-[10px]"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "revert",
        transformOrigin: "center",
        transform: "rotate(-180deg)",
      }}
    >
      {props.text}
    </p>
  );
}

export default BoardTypeText;
