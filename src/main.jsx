// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoginProvider } from "@/context/LoginContext";
import {createRoot} from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const root = createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,

);
