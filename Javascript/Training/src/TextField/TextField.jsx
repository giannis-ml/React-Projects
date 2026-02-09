import "../Styles/TextField.css";

function TextField(props) {
  var labelText = props.name;

  return (
    <div>
      <label>{labelText}</label>
      <input type="text" id="in"></input>
    </div>
  );
}
export default TextField;
