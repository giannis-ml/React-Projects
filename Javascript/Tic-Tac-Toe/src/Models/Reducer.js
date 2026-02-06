
import {xWin, yWin, setBoard, isXnextPlayer, isYnext,newGame } from "./Actions"

const initialState = {
    board: Array(9).fill(null),
    xWins: 0,
    yWins: 0,
    isXnext: true,
    message: "Now Playing: O"
}

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case setBoard.type:
        {

            const nextBoard = state.board.slice();
            nextBoard[action.payload] = state.isXnext ? 'o' : 'x';

            return {
                ...state,
                board: nextBoard
            };
        }

        case xWin.type:
            return { ...state, xWins: state.xWins + 1, message: "Winner: X" };

        case yWin.type:
            return { ...state, yWins: state.yWins + 1, message: "Winner: O" };

        case isXnextPlayer.type:
            return { ...state, isXnext: true, message: "Now Playing: O" };

        case isYnext.type:
            return { ...state, isXnext: false, message: "Now Playing: X" };

        case newGame.type:
            return {
                ...state,
                board: Array(9).fill(null),
                isXnext: true
            };

        default:
            return state;
    }
}

export default reducer;