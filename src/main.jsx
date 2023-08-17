import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme.jsx";
import { UserStorage } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserStorage>
      <Theme>
        <BrowserRouter>
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </Theme>
    </UserStorage>
  </React.StrictMode>
);
