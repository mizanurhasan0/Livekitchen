import React from "react";
import { useRoutes } from "react-router-dom";
import Analytics from "../../Pages/Analytics/Analytics";
import Category from "../../Pages/Catalog/Category";
import CategoryList from "../../Pages/Catalog/CategoryList";
import Product from "../../Pages/Catalog/Product";
import ProductList from "../../Pages/Catalog/ProductList";
import Home from "../../Pages/Home";

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
      path: "/categorieslist",
      element: <CategoryList />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/productlist",
      element: <ProductList />,
    },

    // {
    //   path: "/project",
    //   element: <Ecommerce />,
    // },
  ]);
  return routes;
}
