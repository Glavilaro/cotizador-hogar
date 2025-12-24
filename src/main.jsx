import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// 👇 Agregamos basename para que funcione en GitHub Pages y en dev con /cotizador-hogar
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/cotizador-hogar">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
