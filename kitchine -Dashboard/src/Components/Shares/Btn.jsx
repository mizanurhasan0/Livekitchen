import React from "react";

export default function Btn({ child, cStyle, onClick = () => {} }) {
  return (
    <button
      className={`inline-block  py-3 bg-primary text-txt font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-txt hover:shadow-lg hover:text-primary hover:border-primary border transition duration-150 ease-in-out
      ${cStyle}`}
      onClick={onClick}
    >
      {child}
    </button>
  );
}
