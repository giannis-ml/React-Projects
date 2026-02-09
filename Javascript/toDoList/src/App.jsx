import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./reducer/toDoSlice";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>

      <div className="container">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => dispatch(addTask(text))}>Add</button>
        <button onClick={() => dispatch(deleteTask(0))}>Remove</button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
