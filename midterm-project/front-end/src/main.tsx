import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./routes/LandingPages";
import HomePage from "./routes/Homepage";
import Root, { load as rootLoad } from "./routes/Root";
import Authentication from "./pages/Authentication";
import EditForm from "./components/EditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: rootLoad,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "/auth/edit",
        element: <EditForm></EditForm>,
      },
    ],
  },
  {
    path: "/landingpage",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/auth/*",
    element: <Authentication></Authentication>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
