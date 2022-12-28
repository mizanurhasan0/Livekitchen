import React from 'react'

export default function HeaderTitle({title}) {
  return (
    <h1 className="py-10 text-2xl  uppercase  text-primary  text-left rounded-md flex items-center whitespace-nowrap ">
    {title}
    <div className="h-[0.15rem] w-full bg-primary ml-2 shadow-xl"></div>
  </h1>
  )
}
