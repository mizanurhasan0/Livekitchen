import React from "react";
import Btn from "../../Components/Shares/Btn";
import SearchBar from "../../Components/Shares/SearchBar/SearchBar";
import { tableDb } from "../../Components/Shares/StaticData";
import Tables from "../../Components/Shares/Tables";

const CategoryList = () => {
  return  <div className="p-5 bg-head">
  <div className="bg-txt p-2 overflow-scroll rounded-md">
    <div className="flex justify-between items-center">
    <h1 className="text-4xl pb-5 capitalize text-default">Categories</h1>
    <Btn cStyle={"bg-primary p-2 rounded-md text-txt font-semibold"} child="New Category"/>
    </div>
    <SearchBar/>
    <Tables tblData={tableDb} />
  </div>
</div>;
};

export default CategoryList;
