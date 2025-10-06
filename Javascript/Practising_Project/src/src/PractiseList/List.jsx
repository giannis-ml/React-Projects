function List() {
    const cars = [{ id: 1, name: "Mercedes", Price:70.000},
                    { id: 2, name: "Audi", Price: 130.000},
                    { id: 3, name: "Opel", Price: 10.000},
                    { id: 4, name: "Huiday", Price: 4.000},
                    { id: 5, name: "Tesla", Price: 2},
                    { id: 6, name: "BMW" , Price:170.000}];

    const listItems = cars.map(car => <li key={car.id}>
        {car.Price}: &nbsp;
        <b>{car.Price}</b></li>);
    return (<ol>{listItems}</ol>);
}

export default List