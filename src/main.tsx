import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./context/UserContext.tsx";
import { Theme } from "./styles/Theme.tsx";
import { GlobalStyle } from "./styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
