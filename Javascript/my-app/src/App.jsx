import { useState } from 'react'
import './App.css'


const Greeting = ({name}) => (
    <h1>Hello {name}</h1>
)

const MyButton = ({ trigger, label }) => (

    <button onClick={trigger} style={{ width: 100,height: 100}}>{label}</button>
)

function App() {
    const [board, setBoard] = useState(Array(9).fill(""))

    const [playerXfirst, setPlayer] = useState(true)

    const HandleGame = (i, label, symbol, xplayerNext) => (

       ( <MyButton
            key={i}
            label={label}
            trigger={() => {
                setBoard(board.map((el, p) => (p === i ? symbol : el)));
                setPlayer(xplayerNext);
            }}
        />)
    )

    return (
      <>
        <div>
                <Greeting name="John" />
                <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 100px)',gap: '10px',justifyContent: 'center',marginTop: '20px'}}>
                    {board.map((label, i) =>
                        playerXfirst ? (
                            HandleGame(i,label, 'x', false)
                        ) : (
                            HandleGame(i, label, 'o', true) 
                        )
                    )}
                </div>
        </div>
    </>
  )
}

export default App
