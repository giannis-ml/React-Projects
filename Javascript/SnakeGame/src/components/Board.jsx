import "bootstrap/dist/css/bootstrap.css";
import "./Board.css";
import { BOARD_SIZE } from "../App";
import snake from "./snake";

function Board(props) {
  const cells = Array.from({ length: BOARD_SIZE * BOARD_SIZE });

  return (
    <>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
        }}
      >
        {cells.map((_, index) => (
          <div key={index} className="cell" />
        ))}
      </div>
    </>
  );
}

export default Board;
