import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Btn from "../Btn";
var data = require("./MOCK_DATA.json");

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className=" w-full">
     <div className="relative flex flex-col">
     <div className=" flex capitalize border border-primary rounded-md">
        <input
          type="text"
          placeholder="Search here "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 px-4 rounded-md outline-none text-primary w-full"
        />
        <Btn
          onClick={() => setValue(value)}
          child={<IoIosSearch className="w-8 h-8  text-txt  group-hover:text-txt" />}
          cStyle="border-l border-primary rounded-r-md box-border px-5 flex items-center justify-center hover:text-txt hover:bg-primary group transition-all duration-300"
          
        />
      
      </div>
      <div
        className={`text-gray-500 ${
          value && "border-2 shadow-md "
        } absolute bg-bg w-full top-11 rounded-b-md z-20 flex flex-col space-y-2  items-start px-4 `}
      >
        {data
          .filter((item) => {
            let searchTerm = value.toLowerCase();
            let fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              searchTerm != fullName
            );
          })
          .slice(0, 10)
          .map((item, key) => (
            <div
              className="capitalize cursor-pointer hover:text-green-70 
                 first:pt-3 last:pb-3"
              key={key}
              onClick={() => setValue(item.full_name)}
            >
              {item.full_name}
            </div>
          ))}
      </div>
     </div>
    </div>
  );
};

export default SearchBar;
