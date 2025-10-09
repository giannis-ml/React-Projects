import { React, useContext } from 'react';
import {UserContext} from './Include.jsx';

function ThirdComponent() {

    const { user, surName } = useContext(UserContext);

    return (
        <div>
            <h3>Hello {user}!!!</h3>
            <h3>Surname: {surName}</h3>
        </div>
    )
}

export default ThirdComponent;