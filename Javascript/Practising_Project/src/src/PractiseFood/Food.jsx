function Food() {

    const food1 = "chips";
    const food2 = "Meat";

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;