import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import AuthLogin from "../../Pages/Auth/AuthLogin";
import BlogsWrapper from "../../Pages/BlogsWrapper";
import Carts from "../../Pages/Carts";
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
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blogs",
      element: <BlogsWrapper />,
    },
    {
      path: "/carts",
      element: <Carts />,
    },
    {
      path: "/login",
      element: <AuthLogin />,
    },
  ]);
  return routes;
}
