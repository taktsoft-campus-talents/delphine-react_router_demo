import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Products from "./pages/Products/index.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "contact",
        element: <Contacts />,
        children: [
          {
            index: true,
            element: <Products />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/products",
  //   element: <Products />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
