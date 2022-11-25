import React from "react";
import { blender } from "../Assets/Index";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Carts() {
  return (
    <div className="container mt-20">
        <h1 className="text-4xl pb-5 ">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-5">
        {/* cart lists */}
        <div className="border-t border-primary col-span-2 flex items-center justify-between">
          <img src={blender} alt="" className="h-32 w-32"/>
          <div>
            <span>Blender</span>
            <h4 className="text-xl">Coper Bleander Product</h4>
          </div>
          <div className="flex">
            <button>+</button>
            <input type="number" value={1} className="w-10"/>
            <button>-</button>
          </div>
          <p>44.00 TK</p>
          <AiOutlineCloseSquare size={26}/>
        </div>
        {/* Details */}
        <div className="col-span-1 bg-parag p-5">
          <h1>Summary</h1>
          <hr />
          <div>
            <p>items 3</p>
            <span>132.00 TK</span>
          </div>
          <div>
            <p>Shipping</p>
            <span>32.00 TK</span>
          </div>
          <div>
            <p>Total</p>
            <span>32.00 TK</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
