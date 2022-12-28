import React from "react";
import {
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { MdLockClock } from "react-icons/md";

const ProductFooter = ({proDetails}) => {
  return (
    <div className="grid md:grid-cols-3 mt-5 gap-2 md:gap-0">
      <div className="md:col-span-1 flex items-center text-2xl  ">
        share:
        <span className="flex text-primary items-center">
          <AiFillTwitterSquare className="w-10 h-10 " />
          <AiFillFacebook className="w-10 h-10 " />
          <FaPinterestSquare className="w-9 h-9 " />
          <AiFillGooglePlusSquare className="w-10 h-10 " />
        </span>
      </div>
      <div className="md:col-span-2 border-2 border-primary p-3 text-primary">
        <h1 className="flex items-center ">
          <MdLockClock className="mr-2" />
          DELIVERY TIMELINE: DHAKA CITY: 1-5; OUTSIDE DHAKA: 3-10 (WORKING DAYS)
        </h1>
      </div>
    </div>
  );
};

export default ProductFooter;
