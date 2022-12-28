import React from "react";
import Product from "../Product/Product";
import { ProductsData } from "../Shares/StaticData.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeaderTitle from "../Shares/HeaderTitle";

export default function NewSugPro({ title }) {
  return (
    <div className="container font-Audiowide py-5 ">
      <HeaderTitle title={title} />

      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
        {ProductsData.slice(0, 4).map((product, key) => (
          <div key={key}>
            <Product cardInfo={product} />
          </div>
        ))}
      </div>
      <div className=" py-4 text-primary flex justify-end">
        <button className="group border border-primary flex items-center px-5 text-lg uppercase rounded-full shadow-md">
          More{" "}
          <AiOutlineArrowRight
            size={20}
            className="ml-2 group-hover:translate-x-3 duration-500"
          />
        </button>
      </div>
    </div>
  );
}
