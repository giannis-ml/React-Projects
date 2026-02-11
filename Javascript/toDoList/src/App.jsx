import logo from "./assets/check-list.png";
import ToDoList from "./Components/ToDoList";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  //This is appropriate when using bootstrap, to update boostrap components
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <ToDoList />
          <div className="switch">
            <label>{theme === "dark" ? "Light Theme" : "Dark Theme"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
