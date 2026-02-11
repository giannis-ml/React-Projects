import { useState } from "react";
import Heading from "./Heading";
import logo from "../assets/check-list.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleDelete = () => {
    const filteredTasks = tasks.filter((task) => !task.checked);
    setTasks(filteredTasks);
  };

  const handleCheck = (id) => {
    const updateTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task,
    );
    setTasks(updateTasks);
  };

  return (
    <>
      <Heading />

      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>

      <div className="form-group mx-sm-3 mb-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </th>
              <th scope="col">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  on
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <ul className="list-group mx-sm-3">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={task.checked}
              aria-label="..."
              onChange={() => handleCheck(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
