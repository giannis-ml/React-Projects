import { useState } from "react";
import logo from "./assets/snake.png";
import "./App.css";
import Board from "./components/Board";

export const BOARD_SIZE = 25;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />
    </>
  );
}

export default App;
