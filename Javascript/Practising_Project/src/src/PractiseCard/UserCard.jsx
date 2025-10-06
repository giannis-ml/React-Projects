import './Card.css';

function UserCard({ name, age, email, street, suite, city }) {
    return (
        <div className="card">
            <img
                className="card-image"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"}
                alt={"User Icon"}
            />
            <h2 className="card-title">{name}</h2>
            <h3 className="card-title">{age}</h3>
            <h3 className="card-title">{email}</h3>
            <h5 className="card-title">{street} + {suite} + {city}</h5>
        </div>
    );
}

export default UserCard;
