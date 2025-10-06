import React, { useState } from 'react';
import './ML_Component.css'
function ML_Component() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} /><br></br>
            <input value={quantity} onChange={handleQuantityChange} type="number"/><br></br>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter instructions" /><br></br>
            <select value={payment} onChange={handlePaymentChange}><br></br>
                <option value="" >Select an option</option>
                <option value="Visa" >Visa</option>
                <option value="MasterCard" >MasterCard</option>
                <option value="GiftCard" >GiftCard</option>
            </select><br></br>
            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange} />
                    Pick Up
            </label><br></br>

            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange} />
                Delivery
            </label><br></br>


            <h2>Name: {name}</h2>
            <h3>Quantity: {quantity}</h3>
            <h4>Comment: {comment}</h4>
            <h4>Payment: {payment}</h4>
            <h4>Shipping: {shipping}</h4>
        </div>
    )
}

export default ML_Component