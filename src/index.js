import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
