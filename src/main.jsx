// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoginProvider } from "@/context/LoginContext";
import {createRoot} from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,

);
