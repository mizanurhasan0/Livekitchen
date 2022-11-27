import React from "react";
import { MdBookmarkBorder,MdPayment } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import {RiRefund2Line} from "react-icons/ri"

export default function NotifyList() {
  return (
    <div className="bg-txt my-5 py-5 px-2 rounded-md">
      <div className="flex justify-between items-center border-b ">
        <div className="flex items-center space-x-2">
          <MdBookmarkBorder className="text-primary" />
          <span>0 Orders to pending</span>
        </div>
        <button className="flex items-center  px-4 py-2 rounded-md capitalize hover:bg-head">
          View More
          <AiOutlineArrowRight className="ml-2" />
        </button>
      </div>
      {/*  */}
      <div className="flex justify-between items-center border-b ">
        <div className="flex items-center space-x-2">
          <MdPayment  className="text-primary"/>
          <span>0 Payments to unpaid</span>
        </div>
        <button className="flex items-center  px-4 py-2 rounded-md capitalize hover:bg-head">
          View More
          <AiOutlineArrowRight className="ml-2" />
        </button>
      </div>
      {/*  */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <RiRefund2Line  className="text-primary"/>
          <span>0 Refunds request pending</span>
        </div>
        <button className="flex items-center  px-4 py-2 rounded-md capitalize hover:bg-head">
          View More
          <AiOutlineArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
