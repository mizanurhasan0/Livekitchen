import React from "react";

import { CategoryLists } from "../Shares/StaticData";

const Categoies = () => {
  return (
    <div className="container my-10  font-Lato">
      <h1 className="text-2xl uppercase  text-primary  text-left py-2 rounded-md ">
        Kitchen & dining category
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {CategoryLists.map((item, i) => (
          <div
            key={i}
            className="relative group hover:shadow-lg border border-primary h-40 rounded-xl overflow-hidden shadow-xl cursor-pointer flex flex-col items-center"
          >
            <h1
              className="absolute  text-2xl text-primary font-bold uppercase text-center h-full flex items-center justify-center
        w-full bg-txt bg-opacity-90 group-hover:opacity-0 duration-500"
            >
              {item.name}
            </h1>

            <img src={item.icon} className="w-auto h-full group-hover:scale-110 duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoies;
