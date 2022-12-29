import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShopCategory from "../Components/Categories/ShopCategory";
import Product from "../Components/Product/Product";
import Loading2 from "../Components/Shares/Loading/Loading2";
import Pagination1 from "../Components/Shares/Pagination1";
import SearchDemo from "../Components/Shares/SearchBar/SearchBar";
import { Countries } from "../Components/Shares/StaticData";
import UserCtx from "../Context/UserCtx";
import UseRequest from "../Hooks/UseRequest";
import { slider2 } from "../Assets/Index";
import { useSearchParams } from "react-router-dom";
// import Pagination from "../Utils/Pagination";

export default function Shops() {
  const { category } = UserCtx();
  const [pageProduct, setPageProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const req = UseRequest();
  const [currentProduct, setCurrentProduct] = useState([]);
  // get Query param
  const [param] = useSearchParams();
  // Load product
  useEffect(() => {
    setLoading(true);
    (async () => {
      let url = "";
      if (param.get("id") && !param.get("field") === "category001") {
        url = `products/category/${param.get("id")}`;
      } else if (param.get("id") || !param.get("field") === "country001") {
        url = `products/category/${param.get("id")}`;
      } else {
        url = "products";
      }
    
      await req({ uri: url, method: "GET" })
        .then((res) => {
          setPageProduct(res?.data?.reverse());
          setCurrentProduct(
            res?.data.slice(0, process.env.REACT_APP_PRODUCT_PER_PAGE)
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    })();
  }, [param]);
  //
  return (
    <div className="px-5 md:px-0 md:container  mt-20 ">
      <div className="relative w-full h-60 bg-cover flex items-center justify-center overflow-hidden mb-5">
        <h1 className="text-8xl text-primary font-Audiowide z-10">Shops</h1>
        <img
          src={slider2}
          alt="banner"
          className="absolute object-cover w-full opacity-50"
        />
      </div>
      <div className="md:flex space-x-2  ">
        {/* Start Side category */}
        <div className="text-gray-700 space-y-4">
          {/* 1st */}
          <ShopCategory CategoryLists={category} field="category001" />
          {/* Country filter */}
          <ShopCategory CategoryLists={Countries} field="country001" />
          {/* End country */}
        </div>
        {/* End side bar */}
        <div className="space-y-2 w-full">
          {/* <div  className="relative w-full h-60 bg-cover flex items-center justify-center overflow-hidden">
            <h1 className="text-8xl text-primary font-Audiowide z-10">Shops</h1>
            <img src={slider2} alt="banner" className="absolute object-cover w-full opacity-50"/>
          </div> */}
          {!loading ? (
            <>
              <SearchDemo />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 min-h-screen ">
                {pageProduct.length===0?<h1 className="text-2xl  whitespace-nowrap ">Product not found!</h1>:currentProduct.map((product, key) => (
                  <div key={key} className="w-full">
                    <Product cardInfo={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Loading2 />
          )}
        </div>
      </div>
      <div className="my-5 text-red-500 text-center">
        <Pagination1
          products={pageProduct}
          setCurrentProducts={setCurrentProduct}
        />
      </div>
    </div>
  );
}
