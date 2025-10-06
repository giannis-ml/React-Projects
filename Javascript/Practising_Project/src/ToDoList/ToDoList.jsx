import React, { use, useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    /*const [tasks, setTasks] = useState([]);*/

    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask]= useState("")

    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        event.preventDefault();
        if (newTask === "") return
        setTasks([...tasks, newTask.trim()]);
        setNewTask("");
    }

    function RemoveTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <>
            <form className="container my-3">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add task"
                        aria-describedby="button-addon"
                        value={newTask} 
                        onChange={handleInput}
                    />
                    <button type="submit" className="btn btn-primary" id="button-addon" onClick={AddTask}>
                        Add Task
                    </button>
                </div>
            </form>

            <div className="container my-4">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">ToDo List</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-check">
                            {tasks.length === 0 ? (
                                <p className="text-muted">No tasks yet!</p>
                            ) : (
                                tasks.map((item, i) => (
                                    <div key={i} className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id={`task-${i}`}
                                            onChange={() => RemoveTask(i)}
                                        />
                                        <label className="form-check-label" htmlFor={`task-${i}`}>
                                            {item}
                                        </label>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}

export default ToDoList;