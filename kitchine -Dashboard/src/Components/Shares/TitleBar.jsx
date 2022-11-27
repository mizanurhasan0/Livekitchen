import React from "react";
import { useState } from "react";
import AddProduct from "../Modal/AddProduct";

export default function TitleBar({ title, btnName }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between mb-5">
      <h1 className="text-[1.5rem] font-[600]">{title}</h1>
      <button onClick={()=>setVisible(!visible)} className="bg-primary text-txt px-2 rounded-md ">
        {btnName}
      </button>
      {visible ? (
        <div className="absolute ">
          <AddProduct />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
