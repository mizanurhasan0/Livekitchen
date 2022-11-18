import React, { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import Btn from "../Shares/Btn";
import { ProductsData } from "../Shares/StaticData";

import "./productDetails.css";
import ProductFooter from "./ProductFooter";

export const ProductInfo = () => {
  const [imgInfo, setImgInfo] = useState({
    activeImgURL: ProductsData[0].images[0],
    upAnkerTag: false,
    downAnkerTag: true,
  });
  const imagesList = ProductsData[0].images;

  // for changing image on click
  const onChnageImage = (id) => {
    Object.keys(imagesList).forEach((key) => {
      imagesList[key] === imagesList[id] &&
        setImgInfo({
          ...imgInfo,
          activeImgURL: imagesList[id],
        });
    });
  };

  return (
    <div className=" justify-items-center max-w-7xl mx-auto mb-10 ">
      <div className="md:grid grid-cols-5 gap-5 text-center md:text-start space-y-5">
        {/* mx-[80px] */}
        <div className="col-span-3 grid grid-rows-6 h-[30rem] ">
          <div className=" row-span-5 shadow-black p-3">
            {/* Image */}
            <img
              src={imgInfo?.activeImgURL}
              alt=""
              className="h-full w-full object-cover rounded-md shadow-xl"
            />
          </div>
          <div className="row-span-1 flex overflow-hidden">
            <div className="flex w-auto overflow-x-scroll no-scrollbar scroll-smooth ">
              {/* list of images */}
              {imagesList.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      imgInfo.activeImgURL === imagesList[key]
                        ? " activeBuyImage"
                        : " deactiveBuyImage"
                    } rounded-[0.5rem] min-w-[5rem] h-20 
                     ml-2
                      overflow-hidden   cursor-pointer`}
                    onClick={() => onChnageImage(key)}
                  >
                    <img
                      src={item}
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
            <h1 className="text-3xl font-semibold uppercase ">
              {ProductsData[0].name}
            </h1>
            <h2 className="text-xl capitalize text-gray-500">
              product code :<span className="text-green-700">M-944-142607</span>
            </h2>
            <p className="text-2xl uppercase">
              <span className="line-through mr-2 text-xl text-gray-500 ">
                {ProductsData[0].oldPrice}
              </span>{" "}
              {ProductsData[0].Price}
            </p>
            <p className="text-2xl font-semibold ">
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
      <ProductFooter />
    </div>
  );
};
