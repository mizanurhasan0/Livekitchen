import React from "react";

export default function Input({
  label,
  type,
  required = true,
  register,
  value = "",
  cStyle,
}) {
  return (
    <input
      placeholder={label}
      type={type || "text"}
      required={required}
      {...register}
      defaultValue={value}
      className={`${cStyle} block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-txt bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none `}
    />
  );
}
