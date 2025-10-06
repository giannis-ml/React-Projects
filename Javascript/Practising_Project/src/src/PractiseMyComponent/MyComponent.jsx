import React, { useState } from 'react';
function MyComponent() {
    const [name, setName] = useState("Giannis");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName('Bob')
        console.log(name)
    }

    const IncrementAge = () => {
        setAge(age => age +2)
    }

    const DecrementAge = () => {
        setAge(age=>age-1)
    }

    return (<div>
        <p>Name:{name}</p>
        <button onClick={updateName}>SetName</button>

        <p>Age:{age}</p>
        <button onClick={IncrementAge}>IncrementAge</button>
        <button onClick={DecrementAge}>DecrementAge</button>
            </div>)
}

export default MyComponent