import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import {NavItems} from "../Shares/StaticData"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20 text-txt font-Roboto">
     <div className="bg-primary">
     <div className="md:container md:flex items-center justify-between md:px-10 px-7">
        <div className="rounded-full overflow-hidden h-12 w-12 ">
          <img src={logo} alt="logo"/>
        </div>
        <div
          className="md:hidden absolute right-8 top-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose className="text-3xl"/> : <IoIosMenu className="text-3xl"/>}
        </div>
        <ul
          className={`${
            open ? "top-20" : "top-[-490px]"
          }  md:flex md:items-center md:pb-0 md:w-auto md:z-auto
          md:static
          pb-12 absolute bg-primary z-[-1] left-0 w-full pl-8 transition-all duration-500 ease-in`}
        >
          <div className="py-3 ">
            <div
              className="w-8 h-8 left-9 absolute 
                    -mt-7 md:-z-10 bg-primary rotate-45"
            ></div>
          </div>
          {NavItems.map((link,i) => (
            <li key={i} className="md:ml-8 md:my-0 md:py-4 text-xl my-4 uppercase">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
