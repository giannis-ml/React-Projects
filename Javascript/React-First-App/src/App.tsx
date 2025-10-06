import React, { useState } from "react";
import ListGroup from './components/ListGroup';
import DangerButton from './components/RedButton';
import Alert from './components/Alert';
function App() { 

    const destinations = ["Athens", "Nafplio", "Larissa", "Karditsa", "Heraclion", "Kiato"];
    const [alertvisible, setalertvisible] = useState(false);

    return <div>
        {alertvisible && <Alert onClose={() => setalertvisible(false)} /> }
        <ListGroup items={destinations} heading={"Destinations"} />
        <DangerButton onClick={() => setalertvisible(true)}></DangerButton>
    </div>;
}
export default App;
