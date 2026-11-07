import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TiendaApp from "./TiendaApp";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TiendaApp />
  </StrictMode>
);