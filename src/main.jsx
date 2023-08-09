import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BikeyaProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BikeyaProvider>
        <App />
      </BikeyaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
