import React from "react";

export default function Btn({ child, cStyle, onClick = () => {} }) {
  return (
    <button
      className={`
     transition-all ${cStyle}`}
      onClick={onClick}
    >
      {child}
    </button>
  );
}
