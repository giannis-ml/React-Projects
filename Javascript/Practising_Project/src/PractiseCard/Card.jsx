import './Card.css';

function Card({ title, text, image, onRemove }) {
    return (
        <div className="card">
            <img
                className="card-image"
                src={image || "https://via.placeholder.com/150"}
                alt={title}
            />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            {onRemove && (
                <button className="remove-button" onClick={onRemove}>×</button>
            )}
        </div>
    );
}

export default Card;
