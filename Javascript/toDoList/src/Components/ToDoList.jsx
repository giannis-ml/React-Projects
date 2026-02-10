import { useState } from "react";
import Heading from "./Heading";
import logo from "../assets/check-list.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
  };

  const handleDelete = () => {
    alert("GoodBye");
  };

  return (
    <>
      <Heading />

      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Enter your task..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>

      <div className="form-group mx-sm-3 mb-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={handleAdd}
                >
                  Primary
                </button>
              </th>
              <th scope="col">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-danger"
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

      {tasks}
    </>
  );
}

export default ToDoList;
