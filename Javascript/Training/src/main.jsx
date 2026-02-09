import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WelcomeMessage from "./WelcomeMessage.jsx";
import TextField from "./TextField/TextField.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextField name="Όνομα" />
  </StrictMode>,
);
