import React from "react";
import { blender } from "../Assets/Index";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Carts() {
  return (
    <div className="container mt-20 min-h-screen">
      <div className="grid grid-cols-3 gap-5 py-20">
        <div className="col-span-3 xl:col-span-2">
          <h1 className="text-4xl pb-5 ">Shopping Cart</h1>

          {/* cart lists */}
          {[1, 2, 3].map((i) => (
            <div className="pt-2 gap-3 border-t border-primary  flex items-center justify-between">
              <img src={blender} alt="" className="h-32 w-32" />
              <div>
                <span>Blender</span>
                <h4 className="text-xl">Coper Bleander Product</h4>
              </div>
              <div className="flex text-primary">
                <button className="bg-parag px-5 font-bold rounded-lg">
                  +
                </button>
                <input type="number" value={1} className="w-10 text-center" />
                <button className="bg-parag px-5 font-bold rounded-lg cursor-pointer">
                  -
                </button>
              </div>
              <p>44.00 TK</p>
              <AiOutlineCloseSquare
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
                <p>items 3</p>
                <span>132.00 TK</span>
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
