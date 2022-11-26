import React from "react";
import { useState } from "react";
import ShopCategory from "../Components/Categories/ShopCategory";
import Product from "../Components/Product/Product";
import SearchDemo from "../Components/Shares/SearchBar/SearchBar";
import {
  ProductsData,
  CategoryLists,
  Countries,
} from "../Components/Shares/StaticData";
import Pagination from "../Utils/Pagination";

export default function Shops() {
  const [currentPosts, setCurrentPosts] = useState([]);
  console.log(currentPosts);
  return (
    <div className="px-5 md:px-0 md:container  mt-20 ">
      <div className="md:flex space-x-2 ">
        {/* Start Side category */}
        <div className="text-gray-700 space-y-4">
          {/* 1st */}
          <ShopCategory CategoryLists={CategoryLists} />
          {/* Country filter */}
          <ShopCategory CategoryLists={Countries} />
          {/* End country */}
        </div>
        {/* End side bar */}
        <div className="space-y-2">
          <SearchDemo />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4   gap-3 min-h-screen">
            {currentPosts.map((product, key) => (
              <div key={key} className="w-full">
                <Product cardInfo={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5 text-red-500 text-center">
        <Pagination setCurrentPosts={setCurrentPosts} />
      </div>
    </div>
  );
}
