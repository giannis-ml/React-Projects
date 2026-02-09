import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./reducer/toDoSlice";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={() => dispatch(addTask(text))}>Add</button>

      <button onClick={() => dispatch(deleteTask(0))}>Delete first</button>
    </div>
  );
}

export default App;
