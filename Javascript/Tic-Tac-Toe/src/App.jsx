import { useEffect } from "react";
import { BoardProvider } from "./include/Include.jsx";
import { Board } from "./Board.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  xWin,
  yWin,
  setBoard,
  isXnextPlayer,
  isYnext,
  newGame,
} from "./Models/Actions";

const withDispatch = (actions, variables) => (Component) => (props) => {
  const dispatch = useDispatch();
  const mappedActions = Object.fromEntries(
    Object.entries(actions).map(([name, action]) => [
      name,
      (payload) => dispatch(action(payload)),
    ]),
  );

  const mappedVariables = Object.fromEntries(
    Object.entries(variables).map(([name, selector]) => [
      name,
      useSelector(selector),
    ]),
  );

  const params = { ...mappedActions, ...mappedVariables, ...props };

  return <Component {...params} />;
};

function App({
  xWin,
  yWin,
  setBoard,
  isXnextPlayer,
  isYnext,
  newGame,
  board,
  isXnext,
  message,
  winsOfX,
  winsOfY,
}) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#ff0000" },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });

  const CheckIfGameFinished = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        if (board[a] === "x") xWin();
        else yWin();
        newGame();
        return;
      }
    }

    if (!board.includes(null)) {
      setTimeout(() => newGame(), 1000);
      return;
    }
  };

  useEffect(() => {
    CheckIfGameFinished();
  }, [board]);

  const handleClick = (position) => {
    if (board[position]) return;

    setBoard(position);

    isXnext ? isYnext() : isXnextPlayer();
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BoardProvider value={{ board, isXnext, handleClick, message }}>
          <Board />
          <h2>
            {winsOfX}:{winsOfY}
          </h2>
        </BoardProvider>
      </ThemeProvider>
    </>
  );
}

export default withDispatch(
  { xWin, yWin, setBoard, isXnextPlayer, isYnext, newGame },
  {
    board: (state) => state.board,
    isXnext: (state) => state.isXnext,
    message: (state) => state.message,
    winsOfX: (state) => state.xWins,
    winsOfY: (state) => state.yWins,
  },
)(App);
