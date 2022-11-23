import React from "react";
import { orderHistory } from "../Shares/StaticData";

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Dashboard</h1>
        <span>Date</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {orderHistory.map((history) => (
          <div className="border-2 shadow-md text-center px-2 py-4 space-y-2">
            <h2 className="text-xl uppercase">{history.title}</h2>
            <h1 className="text-2xl font-semibold">{history.amount}</h1>
            <p className="text-sm">{history.filter}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
