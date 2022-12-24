import React from "react";

export default function Dropdown({ register }) {
  return (
    <select
      {...register}
      className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-txt bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
}
