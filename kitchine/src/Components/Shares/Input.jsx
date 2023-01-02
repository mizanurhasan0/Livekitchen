import React from "react";

export default function Input({ label, type, required, register, className }) {
  return (
    <input
      placeholder={label}
      type={type || "text"}
      required={required}
      {...register}
      className={`${className} h-12 rounded-md px-2 w-full bg-transparent border-b-2 outline-none text-white `}
    />
  );
}
