import React from "react";
import { useState } from "react";
import AddProduct from "../Modal/Products/AddProduct";
import Btn from "./Btn";

export default function TitleBar({ title, btnName,openModal }) {
  
  return (
    <div className="flex justify-between mb-5 bg-txt rounded-md px-5 py-4 shadow-lg">
      <h1 className="text-[1.5rem] font-[600]">{title}</h1>
      <Btn onClick={()=>openModal(true)} child={btnName} cStyle="px-2"/>
      
    
    </div>
  );
}
