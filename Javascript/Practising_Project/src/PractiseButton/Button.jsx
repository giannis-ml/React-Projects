
function Button() {

    const handleClick = () => console.log("Ahoy!");

    const handleClick2 = (name) => console.log('${name} stop clicking');

    return (<button onClick={() => handleClick2("Giannis")}>Click re</button>)
}

export default Button;