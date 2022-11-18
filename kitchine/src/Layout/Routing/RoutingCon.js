import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../Pages/Home";
import { ProductDetail } from "../../Pages/ProductDetail";
import Shops from "../../Pages/Shops";


export default function RoutingCon() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shops",
      element: <Shops />,
    },
    {
      path: "/:id",
      element: <ProductDetail />,
    },
    // {
    //   path: "/project",
    //   element: <Ecommerce />,
    // },
  ]);
  return routes;
}
