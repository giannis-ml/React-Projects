import React, { useState } from "react";
import UserContext from '../UserContext';
function Counter() {
    const [counter, setCounter] = useState(2);

    function handleAddClick() {
        setCounter(counter + 1);
    }

    function handleRemoveButton() {
        if (counter === 0) {
            return
        }
        setCounter(counter - 1);
    }

    return (
        <>
            <div className="container py-4 text-center">
                <div className="row justify-content-center">
                    <div className="p-3 border border-3 border-dark rounded">
                        <h3 className="fw-bold">Counter: <span className="text-success">{counter}</span></h3>
                        <button type="button" className="btn btn-success me-2" onClick={handleAddClick}>+ Add</button>
                        <button type="button" className="btn btn-danger" onClick={handleRemoveButton}>- Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;