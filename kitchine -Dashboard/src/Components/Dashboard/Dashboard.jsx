import React from "react";
import { orderHistory } from "../Shares/StaticData";
import RecentOrders from "./RecentOrders";

export default function Dashboard() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between pb-5 text-default">
        <h1 className="text-4xl">Dashboard</h1>
        <span>Date</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
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
      <div>
        <RecentOrders />
      </div>
    </div>
  );
}
