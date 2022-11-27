import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../../Components/Login/Login";
import Analytics from "../../Pages/Analytics/Analytics";
import Category from "../../Pages/Catalog/Category";
import ProductList from "../../Pages/Catalog/ProductList";
import CustomerList from "../../Pages/Customers/CustomerList";
import Home from "../../Pages/Home";
import Orders from "../../Pages/Orders/Orders";

export default function RoutingCon() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/customers",
      element: <CustomerList />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routes;
}
