import React, { useState } from 'react';
import './Card.css';
import Card from './Card';

function AddButton() {
    const [cards, setCards] = useState([]);

    function handleAddCard() {
        const newCard = {
            title: 'Νέα Κάρτα',
            text: 'Προσθέσατε μια νέα κάρτα!',
            image: '',
        };
        setCards(prev => [...prev, newCard]);
    }

    function handleRemoveCard(indexToRemove) {
        setCards(prev => prev.filter((_, index) => index !== indexToRemove));
    }

    return (
        <>
            <button className="add-button" onClick={handleAddCard}>＋</button>

            <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        text={card.text}
                        image={card.image}
                        onRemove={() => handleRemoveCard(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default AddButton;