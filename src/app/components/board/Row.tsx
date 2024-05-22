interface RowProps {
  children : JSX.Element []
}

function Row(props : RowProps) {
  return (
    <div className="flex flex-row justify-center">
      {props.children}
    </div>
  )
}

export default Row;