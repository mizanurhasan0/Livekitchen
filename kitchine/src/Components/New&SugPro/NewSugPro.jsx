import React from "react";
import Product from "../Product/Product";
import { ProductsData } from "../Shares/StaticData.js";

export default function NewSugPro({ title }) {
  return (
    <div className="container font-Lato py-5 ">
      <h1 className="text-2xl uppercase  text-primary text-left py-2 mb-5 ">
        {title}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
        {ProductsData.slice(0,4).map((product, key) => (
          <div key={key}>
            <Product cardInfo={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
