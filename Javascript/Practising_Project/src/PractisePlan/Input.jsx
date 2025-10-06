import React, { useState } from 'react';
function Input() {

    const [userName, setUserName] = useState("")

    const handleInput = (e) => setUserName(e.target.value);


    return (
        <>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleInput} />
            </div>
            <div className="container my-3">
                <div className="card text-center shadow-sm border-primary">
                    <div className="card-body">
                        <p className="card-text fw-semibold">
                            Username: <span className="text-primary">{userName}</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Input;