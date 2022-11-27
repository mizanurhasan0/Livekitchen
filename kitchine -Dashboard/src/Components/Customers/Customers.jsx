import React from "react";
import { useState } from "react";
import Pagination from "../../Utils/Pagination";
import SearchBar from "../Shares/SearchBar/SearchBar";
import Tables from "../Shares/Tables";
import TitleBar from "../Shares/TitleBar";

export default function Customers() {
  const [currentPosts, setCurrentPosts] = useState(false);
  return (
    <div className="py-10 px-5 bg-parag min-h-screen">
      <TitleBar title="Customers" btnName="Add Customer" />
      {/*  */}
      <div className="overflow-x-scroll bg-txt ">
        <div className=" py-5 grid grid-cols-4 gap-5 px-5">
         <div className="col-span-3">
         <SearchBar />
         </div>
          <select className="border-2 w-full col-span-1" name="dog-names" id="dog-names">
            <option value="rigatoni">Active</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
          </select>
         
        </div>
        <Tables tblData={currentPosts} />
        <div className="block text-center py-5 space-x-1 ">
          <Pagination setCurrentPosts={setCurrentPosts} />
        </div>
      </div>
    </div>
  );
}
