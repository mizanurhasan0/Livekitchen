import React from 'react'
import { AiFillBell } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { profile } from '../../Assets/Index'

export default function TopBar({setMinSidebar,info}) {
  return (
    <div className="h-16 shadow-lg flex items-center justify-between px-5 ">
    <HiOutlineMenuAlt2
      size={30}
      onClick={ setMinSidebar}
      className="cursor-pointer mr-2"
    />
    <div className="flex items-center space-x-2">
      <div className="relative mr-10">
        <AiFillBell size={26}/>
        <span className="absolute -top-2 -right-3 bg-primary w-5 h-5 rounded-full  text-txt flex items-center justify-center text-xl">1</span>
      </div>
      <img src={profile} alt="profile" className="w-10 h-10 rounded-md" />
      <div>
        <h1 className="text-primary font-semibold capitalize">Mizanur Hasan</h1>
        <p className="text-sm ">mizanur@gmail.com</p>
      </div>
    </div>
  </div>
  )
}
