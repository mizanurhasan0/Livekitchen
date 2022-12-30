import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ShopCategory({ CategoryLists,field,title }) {
  const navigate=useNavigate()
  return (
    <div className="bg-white p-2">
      <h1 className="text-lg text-primary font-bold capitalize whitespace-nowrap">{title}</h1>
      <ul className="space-y-2 py-5">
        {CategoryLists.map((category, i) => (
         
          <li  key={i} className="flex items-center space-x-2 font-Playfair text-xl">
            <input type="radio" name={field} id={i} onChange={()=>navigate(`/shops?id=${category?._id+'&field='+field}`)}/>
            <label htmlFor={i} className="capitalize whitespace-nowrap cursor-pointer" >{category?.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

// to={}