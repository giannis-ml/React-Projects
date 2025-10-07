import { useState } from 'react'
import './App.css'


const Greeting = ({name,lname}) => (
    <h1>Hello {name} {lname}</h1>
)

const MyButton = ({ trigger, label }) => (

    <button onClick={trigger} style={{ width: 200,height: 200}}>{label}</button>
)

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))

  return (
      <div>
          <Greeting name="John" lname={board} />
          <MyButton trigger={() => setBoard(board + 1)} />
          {board.map((label,i) => (
              <MyButton label={label} trigger={()=>setBoard(board.map((el,p)=> p===i ? "x" : el))} />
          ))}
    </div>
  )
}

export default App
