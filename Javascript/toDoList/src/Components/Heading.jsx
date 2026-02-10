import logo from "../assets/check-list.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Heading() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <h1 className="display-3 mb-0">ToDo List</h1>
        <img
          src={logo}
          alt="icon"
          style={{ height: "40px", marginLeft: "12px" }}
        />
      </div>
    </>
  );
}

export default Heading;
