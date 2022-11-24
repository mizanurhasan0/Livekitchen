import React, { useState } from "react";
import { orderHistory, tableDb } from "../Shares/StaticData";
import Tables from "../Shares/Tables";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="p-5 bg-head">
      <div className="flex items-center justify-between mb-5 text-default bg-txt px-2 py-4">
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
      <div className="bg-txt px-2 py-4 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {orderHistory.map((history) => (
          <div
            className="border-2 shadow-md text-center 
          px-2 py-4 space-y-2 "
          >
            <h2 className="text-xl uppercase">{history.title}</h2>
            <h1 className="text-2xl font-semibold">{history.amount}</h1>
            <p className="text-sm text-default">{history.filter}</p>
          </div>
        ))}
      </div>
      <div className="my-10 bg-txt px-2 py-5">
        <h1 className="text-2xl pb-5 capitalize">Recent Orders</h1>
        <Tables tblData={tableDb} />
      </div>
    </div>
  );
}
