import React, { useState } from 'react'
import Destination from './Destination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Warning.css'
import './AddButton.css'
import './Item.css'

function Warning() {
    return (
        alert("Warning!")
    );
}

function Item() {

    const places = {
        img: "https://cdn-icons-png.flaticon.com/128/18717/18717248.png",
        name: "building",
        city: "Athens",
        description: "Build in 678",
    };



    return(

        <>
                <Destination {...places} />
                <button className="button">+</button>
        </>
    );
}


export default Item