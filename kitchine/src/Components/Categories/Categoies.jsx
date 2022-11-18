import React from "react";

import { CategoryLists } from "../Shares/StaticData";

const Categoies = () => {
  return (
    <div className="container my-10  font-Lato">
      <h1 className="text-2xl capitalize  text-primary border-2 border-primary text-center py-2 rounded-md ">
        Kitchen & dining category
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {CategoryLists.map((item, i) => (
          <div
            key={i}
            className="relative group hover:shadow-lg bg-primary h-32 rounded-xl overflow-hidden shadow-xl cursor-pointer flex flex-col items-center"
          >
            <h1
              className="absolute  text-md text-primary font-bold uppercase text-center py-3 px-5
        w-full bg-txt bg-opacity-90 group-hover:opacity-0 duration-500"
            >
              {item.name}
            </h1>

            <item.icon className="w-full h-full mb-2  text-txt  group-hover:scale-110 duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoies;
