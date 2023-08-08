import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
