import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.firstName} — {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
