import { useContext } from 'react'
import { boardContext } from './include/Include.jsx'
import { Greeting, MyButton } from './Button.jsx'

export const Board = () => {

    const { board, handleClick, message } = useContext(boardContext);

    return (
        <>
            <div>
                <Greeting name="John" />
                <h2>{message}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                    {board.map((label, i) =>
                        <MyButton
                            key={i}
                            label={label}
                            pos={i}
                            handleClick={handleClick}
                        />
                    )}
                </div>
            </div>
        </>
    )
}