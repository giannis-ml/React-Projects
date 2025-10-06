import React, { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}
function ListGroup(props: Props) {

    const [selectedIndex, setselectedIndex] = useState(-1);

    return <><h1>My list!!!</h1>
        {props.items.length ===0 ? <p>No items found</p>:null }
        <ul className="list-group">
            {props.items.map((dest, index) => (<li
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={dest}
                onClick={() => { setselectedIndex(index); }}>{dest}
                                        </li>
        ))}
    </ul></>;
}

export default ListGroup;