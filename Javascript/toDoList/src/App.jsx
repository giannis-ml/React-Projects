import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "./assets/check-list.png";
import ToDoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#190909" },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
