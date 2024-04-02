import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/AllPages/Root";
import Home from "./Components/AllPages/Home";
import Register from "./Components/AllPages/Register";
import Login from "./Components/AllPages/Login";
import CommonFile from "./Components/AllPages/CommonFile";
import Product from "./Components/AllPages/Product";
import Order from "./Components/AllPages/Order";
import Private from "./Components/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: (
          <Private>
            <Product />
          </Private>
        ),
      },
      {
        path: "/order",
        element: (
          <Private>
            <Order />
          </Private>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommonFile>
      <RouterProvider router={router} />
    </CommonFile>
  </React.StrictMode>
);
