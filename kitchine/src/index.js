import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import UserProvider from "./Context/UserCtx/UserProvider";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CookiesProvider>
  </BrowserRouter>
);
