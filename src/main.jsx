// index.js

import React from "react";
import ReactDOM from "react-dom";
import { LoginProvider } from "@/context/LoginContext";
import LoginPage from "@/pages/Login";
import ErrorPage from "@/pages/Error";
import ElectionPage from "@/pages/Election";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
  
  ,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "vote",
        element: <ElectionPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
