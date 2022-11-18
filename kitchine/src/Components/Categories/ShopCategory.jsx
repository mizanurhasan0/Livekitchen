import React from "react";

export default function ShopCategory({ CategoryLists }) {
  return (
    <div className="bg-white p-2">
      <h1 className="text-lg text-primary font-bold capitalize whitespace-nowrap">Filter by Category</h1>
      <ul className="space-y-2 py-5">
        {CategoryLists.map((category, i) => (
          <li key={i} className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="capitalize whitespace-nowrap">{category?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
