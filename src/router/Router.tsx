import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";

const router = createBrowserRouter([
    {
      path: "/app",
      element: <App/>,
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/product/:id",
      element:  <ProductDetail/>  
    }
  ]);
  
export default router;