import React from "react";
import Product from "../Product/Product";
import { ProductsData } from "../Shares/StaticData.js";

export default function NewSugPro({ title }) {
  return (
    <div className="container font-Lato py-5 ">
      <h1 className="text-2xl capitalize  text-primary text-center py-2 mb-5 rounded-md border-2 border-primary shadow-lg">
        {title}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 justify-items-center">
        {ProductsData.map((product, key) => (
          <div key={key}>
            <Product cardInfo={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
