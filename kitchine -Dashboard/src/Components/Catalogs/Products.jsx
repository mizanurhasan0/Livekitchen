import React from "react";
import { useState } from "react";
import SearchBar from "../Shares/SearchBar/SearchBar";
import { TblProductHeader } from "../Shares/StaticData";
import ShareTable from "../Shares/ShareTable";
import TitleBar from "../Shares/TitleBar";
import Pagination1 from "../Shares/Pagination1";
import UseRequest from "../../Hooks/UseRequest";
import { useEffect } from "react";

export default function Products() {
  const [currentPosts, setCurrentPosts] = useState([]);
  const req = UseRequest();
  // Function
  useEffect(() => {
    req({ uri: "products", method: "GET" }).then((res) => {
      setCurrentPosts(res?.data);
    //  console.log(res)
    });
  }, []);
  console.log(currentPosts)
  return (
    <div className="py-10 px-5 bg-parag min-h-screen">
      <TitleBar title="Product list" btnName="Add product" />

      <div className="bg-txt">
        <div className=" py-5 grid grid-cols-4 gap-5 px-5">
          <div className="col-span-3">
            <SearchBar />
          </div>
          <select
            className="border-2 w-full col-span-1"
            name="dog-names"
            id="dog-names"
          >
            <option value="rigatoni">Active</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
          </select>
        </div>
        <ShareTable tblData={currentPosts} tblHeader={TblProductHeader} />
        <div className="block text-center py-5 space-x-1 ">
          {/* <Pagination1 setCurrentPosts={setCurrentPosts} /> */}
        </div>
      </div>
    </div>
  );
}
