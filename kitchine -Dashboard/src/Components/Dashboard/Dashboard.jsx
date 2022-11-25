import React, { useState } from "react";
import { orderHistory, tableDb } from "../Shares/StaticData";
import Tables from "../Shares/Tables";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [tblDate, setTblDate] = useState(tableDb);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = {
    ...tblDate,
    data: tblDate.data.slice(firstPostIndex, lastPostIndex),
  };

  const changePage = (val, type) => {
    if (type === "pre") {
      if (currentPage > 1) {
        setCurrentPage((v) => v - 1);
      }
    }
    if (type === "next") {
      if (currentPage < Math.ceil(tblDate.data.length / postsPerPage))
        setCurrentPage((v) => v + 1);
    }
    if (type === "field") {
      if (val > 0 && val <= Math.ceil(tblDate.data.length / postsPerPage))
        setCurrentPage(val);
    }
  };
  //
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
      <div className="my-10 bg-txt px-2 py-5 overflow-scroll rounded-md">
        <h1 className="text-2xl pb-5 capitalize">Recent Orders</h1>
        <Tables tblData={currentPosts} />
        <div className="block text-center py-5 space-x-1">
          <button
            onClick={() => changePage(currentPage, "pre")}
            className="bg-primary px-2 text-txt rounded-md"
          >
            Prev
          </button>
          <span>
            <input
              type="number"
              value={currentPage}
              name="pageNumber"
              onChange={(e) => changePage(e.target.value, "field")}
              className="w-10 border-primary border text-center"
            />
            of {Math.ceil(tblDate.data.length / postsPerPage)}
          </span>
          <button
            onClick={() => changePage(currentPage, "next")}
            className="bg-primary px-2 text-txt rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
