import React from "react";

export default function Input({ label, type, required, register, cStyle }) {
  return (
    <input
      placeholder={label}
      type={type || "text"}
      required={required}
      {...register}
      className={`${cStyle} bg-transparent border-b-2 outline-none text-white `}
    />
  );
}
