import Movement from "@/model/Movement";
import Position from "@/model/Position";
import Cel from "./Cel";
import Row from "./Row";

interface RowsProps {
  movement : Movement;
  getColor : (position : Position | undefined, index : number) => string;
}
function Rows({ movement, getColor } : RowsProps) {

  let boards : JSX.Element[] = [];

  movement.board.forEach((board, index) => {
    const rowsCount = board.rows || 5;
    let tableRows : JSX.Element[] = [];

    for(let row = 1; row <= rowsCount; row++)
    {
      let tableColumns = [];
      for(let column = 1; column <= 5; column++)
      {
        const position = board.movements.findLast((x) => x.row === row && x.column === column);
        tableColumns.push(<Cel color={getColor(position, index)} key={row + column + index}/>);
      }
      tableRows.push(<Row key={index + row}>{tableColumns}</Row>)
    }

    boards.push(<div className="content-center" key={index}>{tableRows}</div>)
  })

  return (
    <div>
      {boards}
    </div>
  )
}

export default Rows;