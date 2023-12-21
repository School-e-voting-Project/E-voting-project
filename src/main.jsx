// index.js
import { LoginProvider } from "@/context/LoginContext";
import { VotingProvider } from "@/context/VotingContext";
import LoginPage from "@/pages/Login";
import ErrorPage from "@/pages/Error";
import CongratsPage from "@/pages/Congratulations";
import ElectionPage from "@/pages/Election";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "congrats",
        element: <CongratsPage />,
      },
      {
        path: "vote",
        element: <VotingProvider />,
        children: [
          {
            index: true,
            element: <ElectionPage />,
          },
        ],
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
