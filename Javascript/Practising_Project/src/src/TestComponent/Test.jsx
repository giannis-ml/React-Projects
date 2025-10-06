import { Button } from 'bootstrap';
import React, { useState } from 'react'

function Test() {

    const [name, SetName] = useState("");
    const [age, SetAge] = useState(18);
    const [resident, SetResident] = useState("-");

    function handleClick(){
        SetName(name+"aaa");
    }

    return (
        <>
        <div className="Container">
            <h2>Name:{name}</h2>
            <h3>Age:{age}</h3>
            <h3>Resident:{resident}</h3>
            </div>
            <button onClick={handleClick}>change name</button>
        </>
    );
}

export default Test;