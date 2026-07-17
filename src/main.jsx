import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/theme.css";
import "./styles/global.css";

// Served from a subpath on GitHub Pages ("/portfolio/"), so the router has to
// strip that prefix before matching routes — otherwise every path 404s in
// production while working locally. Derived from Vite's base, so the two can
// never drift apart.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
