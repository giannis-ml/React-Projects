
export const actionCreator = (type) => {
    const action = (payload) => ({ type, payload })
    action.type = type
    return action
}

export const xWin = actionCreator("XWIN")

export const yWin = actionCreator("YWIN")

export const setBoard = actionCreator("SETBOARD")

export const isXnextPlayer = actionCreator("ISXNEXT")

export const isYnext = actionCreator("ISYNEXT")

export const newGame = actionCreator("NEWGAME")