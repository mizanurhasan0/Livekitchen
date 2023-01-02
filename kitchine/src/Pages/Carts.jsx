import React from "react";
import { blender } from "../Assets/Index";
import { AiOutlineCloseSquare } from "react-icons/ai";
import UserCtx from "../Context/UserCtx";
import { useState } from "react";
import { useEffect } from "react";

export default function Carts() {
  const { carts } = UserCtx();
  const [itemsPrice, setItemPrice] = useState(0);

  useEffect(() => {
    carts?.products?.map((product, key) => {
      setItemPrice(
        (price) => price + product?.productId?.price * product.quantity
      );
    });
  }, []);
 
  return (
    <div className="container mt-20 min-h-screen">
      <div className="grid grid-cols-3 gap-5 py-20">
        <div className="col-span-3 xl:col-span-2">
          <h1 className="text-4xl pb-5 ">Shopping Cart</h1>

          {/* cart lists */}
          {carts?.products?.map((product, key) => (
            <div
              key={key}
              className="pt-2 gap-3 border-t border-primary  flex items-center justify-between"
            >
              <img
                crossOrigin="anonymous"
                src={
                  process.env.REACT_APP_URL_IMG +
                  `/products/` +
                  product?.productId?.images[0]
                }
                alt=""
                className="h-32 w-32"
              />
              <div>
                <span>{product?.productId?.name}</span>
                <h4 className="text-xl">{product?.productId?.brand}</h4>
              </div>
              <div className="flex text-primary">
                <button className="bg-parag px-5 font-bold rounded-lg">
                  +
                </button>
                <input
                  type="number"
                  defaultValue={product?.quantity}
                  className="w-10 text-center"
                />
                <button className="bg-parag px-5 font-bold rounded-lg cursor-pointer">
                  -
                </button>
              </div>
              <p>{product?.quantity * product?.productId?.price} TK</p>
              <AiOutlineCloseSquare
                onClick={() => alert(product?.productId?._id)}
                size={26}
                className="cursor-pointer text-primary"
              />
            </div>
          ))}
        </div>
        {/* Details */}
        <div className="col-span-3 xl:col-span-1   rounded-md">
          <div className="bg-parag p-5 min-h-[80vh]">
            <h1 className="text-2xl py-2">Summary</h1>
            <hr />
            <div className="space-y-4 text-xl capitalize">
              <div
                className="flex justify-between 
          items-center mt-5"
              >
                <p>items {carts?.products?.length}</p>
                <span>{itemsPrice} TK</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping</p>
                <span>32.00 TK</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Total</p>
                <span>32.00 TK</span>
              </div>
            </div>
            <button
              className="border border-primary w-full bg-txt text-primary
           uppercase my-2 rounded-sm text-lg "
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
