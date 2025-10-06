import React, { useState, useEffect } from 'react';
import './Carousel.css'

function Carousel() {

    const images = [
        "https://www.travel.gr/wp-content/uploads/2023/08/bourtzi-nafplion-2048x1536.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAaYpBmMhWyUp2feKgHAngxjF26if1K7CFA&s",
        "https://www.argolisculture.gr/media/1822/02a.jpg?mode=max&quality=100&width=960&height=470&rnd=133421795540000000"
    ]

    const [index, updateIndex] = useState(1)
    const [image_to_show, setShow] = useState(images[index])

    function Previous(){
        if (index== 0) {
            updateIndex(images.length-1)
            return
        }
        updateIndex(index-1)
    }
    function Next() {
        if (index == (images.length - 1)) {
            updateIndex(0)
            return
        }
        updateIndex(index +1)
    }

    useEffect(() => {
        setShow(images[index]);
    }, [index,images]);

    return (
        <>
            <div className="d-flex justify-content-center">
                <button className="btn p-0 border-0 bg-transparent" onClick={Previous} >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
                        alt="Previous"
                        style={{ width: "30px", height: "30px" }}
                    />
                </button>
                <img
                    src={image_to_show}
                    className="img-rounded"
                    alt="Cinque Terre"
                    style={{ width: "400px", height: "auto" }}
                />
                <button className="btn p-0 border-0 bg-transparent" onClick={Next}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt="Next"
                        style={{ width: "30px", height: "30px" }}
                    />
                </button>
            </div>

        </>
    );
}

export default Carousel