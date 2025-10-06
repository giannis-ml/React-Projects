import React from 'react'
import Card from 'react-bootstrap/Card';
import './Destination.css';
import Item from './Item.jsx'

function Destination(props) {
    return (
        <>
            <Card className="card" key={props.key}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}, {props.city}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Destination