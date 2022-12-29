import React, { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import UseRequest from "../../Hooks/UseRequest";

import Btn from "../Shares/Btn";
import { ProductsData } from "../Shares/StaticData";

import "./productDetails.css";
import ProductFooter from "./ProductFooter";

export const ProductInfo = ({ productData }) => {
  const [imgInfo, setImgInfo] = useState(productData?.images[0] || null);

  // Load Single product Info

  return (
    <div className=" mb-10 font-Audiowide ">
      <div className="md:grid grid-cols-5 gap-5 text-center md:text-start space-y-5">
        {/* mx-[80px] */}
        <div className="col-span-3 grid grid-rows-6 h-[30rem] ">
          <div className=" row-span-5 shadow-black p-3">
            {/* Image */}
            <img
              crossOrigin="anonymous"
              src={process.env.REACT_APP_URL_IMG + "/products/" + imgInfo}
              alt=""
              className="h-full w-full object-contain rounded-md shadow-xl"
            />
          </div>
          <div className="row-span-1 flex overflow-hidden">
            <div className="flex w-auto overflow-x-scroll no-scrollbar scroll-smooth ">
              {/* list of images */}
              {productData?.images.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`
                    ${
                      imgInfo === productData?.images[key]
                        ? " activeBuyImage transition-all duration-200"
                        : " deactiveBuyImage"
                    }
                     rounded-[0.5rem] min-w-[5rem] h-20 
                     ml-2
                      overflow-hidden   cursor-pointer`}
                    onClick={() => setImgInfo(productData?.images[key])}
                  >
                    <img
                      crossOrigin="anonymous"
                      src={process.env.REACT_APP_URL_IMG + "/products/" + item}
                      alt=""
                      className="w-full h-full object-cover duration-1000"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* End Images */}
        <div className="md:col-span-2 shadow-md  flex flex-col justify-between ">
          <div className="space-y-3 pl-5">
            <h1 className="text-2xl font-semibold uppercase ">
              {productData?.name}
            </h1>
            <h2 className="text-base capitalize text-gray-500">
              product code :<span className="text-green-700">M-944-142607</span>
            </h2>
            <p className="text-xl uppercase">
              <span className="line-through mr-2 text-xl text-gray-500 ">
                {ProductsData[0].oldPrice}
              </span>{" "}
              {productData?.price} TK
            </p>
            <p className="text-xl font-semibold ">
              Qty:
              <input
                type="number"
                defaultValue={1}
                className=" ml-2 w-20 text-center font-normal"
              />
            </p>
          </div>
          <Btn
            cStyle={
              "bg-primary  w-full text-txt  text-lg font-bold capitalize p-2"
            }
            child={
              <span className="flex items-center  justify-center ">
                <FaShoppingCart className="mr-2" />
                Add to card
              </span>
            }
          />
        </div>
      </div>
      {/*  footer */}
      <ProductFooter proDetails={productData} />
    </div>
  );
};
