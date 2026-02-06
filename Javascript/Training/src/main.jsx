import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WelcomeMessage from "./WelcomeMessage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WelcomeMessage />
  </StrictMode>,
);
