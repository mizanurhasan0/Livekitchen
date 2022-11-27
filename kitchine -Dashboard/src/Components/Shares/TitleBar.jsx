import React from 'react'

export default function TitleBar({title,btnName}) {
  return (
    <div className="flex justify-between mb-5">
        <h1 className="text-[1.5rem] font-[600]">{title}</h1>
        <button className="bg-primary text-txt px-2 rounded-md ">
          {btnName}
        </button>
      </div>
  )
}
