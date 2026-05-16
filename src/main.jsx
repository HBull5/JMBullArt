import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";

// IMPORTANT for GitHub Pages: use Vite base path via import.meta.env.BASE_URL
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
