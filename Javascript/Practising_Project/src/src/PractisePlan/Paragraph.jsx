function Paragraph() {

    function Toggle() {
        var x = document.getElementById("toggle");
        var btn = document.getElementById("togglebtn");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    }

    return(
        <>
            <div className="container my-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <p>
                            State should be held by the highest</p> <button id="togglebtn" type="button" className="btn btn-link" onClick={Toggle}>...</button><p id="toggle"> parent component in the stack that requires access to the state.
                            To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
                            To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Paragraph