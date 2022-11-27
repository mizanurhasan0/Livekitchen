import React, { useState } from "react";
import { orderHistory } from "../Shares/StaticData";
import Tables from "../Shares/Tables";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "../../Utils/Pagination";
import NotifyList from "./NotifyList";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());

  const [currentPosts, setCurrentPosts] = useState(false);

  return (
    <div className="p-5 bg-head">
      <div className="flex items-center justify-between mb-5 text-default bg-txt px-2 py-4 rounded-md">
        <h1 className="text-4xl">Dashboard</h1>
        <span
          className="border border-primary text-primary 
        font-semibold rounded-md p-1 "
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </span>
      </div>
      {/* Summery */}
      <div className="bg-txt px-2 py-4 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 rounded-md">
        {orderHistory.map((history, i) => (
          <div
            key={i}
            className="border-2 shadow-md text-center 
          px-2 py-4 space-y-2 "
          >
            <h2 className="text-xl uppercase">{history.title}</h2>
            <h1 className="text-2xl font-semibold">{history.amount}</h1>
            <p className="text-sm text-default">{history.filter}</p>
          </div>
        ))}
      </div>
   {/* Notifying..... */}
   <div>
        <NotifyList />
      </div>
      {/*End Notifying..... */}
      <div className="my-10 bg-txt px-2 py-5 overflow-scroll rounded-md">
        <h1 className="text-2xl pb-5 capitalize">Recent Orders</h1>
        <Tables tblData={currentPosts} />
        <div className="block text-center py-5 space-x-1 ">
          <Pagination setCurrentPosts={setCurrentPosts} />
        </div>
      </div>
    </div>
  );
}
