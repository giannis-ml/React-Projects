
import React, { useState } from 'react';
import './PractiseUpdateObject.css'
function MyComponent() {
    const [car, setCar] = useState({
                            year: 2025,
                            make: "Ford",
                            model: "Mustang"
    });

    function handleCarYear(event) {
        setCar(c => ({...c, year:event.target.value}));
    }
    function handleCarMake(event) {
        setCar(c => ({ ...c, make: event.target.value }));
    }
    function handleCarModel(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }

    return (<>
        <div>
            <h3> Your favorite car is: {car.year} {car.make} {car.model}</h3>
        </div>

        <input type="number" value={car.year} onChange={handleCarYear} /><br></br>
        <input type="text" value={car.make} onChange={handleCarMake} /><br></br>
        <input type="text" value={car.model} onChange={handleCarModel} /><br></br>
    </>)
}
export default MyComponent