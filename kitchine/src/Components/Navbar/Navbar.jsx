import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { NavItems } from "../Shares/StaticData";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Shares/Btn";
import { avater } from "../../Assets/Index";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [login, setLogin] = useState(true);
  const navigate=useNavigate();

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20 text-txt font-Roboto ">
      <div className="bg-primary px-2 sm:px-0">
        <div className="container md:flex items-center justify-between ">
          <div className="rounded-full overflow-hidden h-12 w-12 ">
            <img src={logo} alt="logo" className="h-12 w-12"/>
          </div>
          <div
            className="md:hidden absolute right-8 top-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <IoIosMenu className="text-3xl" />
            )}
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
            {NavItems.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer md:ml-8 md:my-0 md:py-4 text-xl my-4 uppercase"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            {login && (
              <li onClick={()=>navigate("/carts")} className=" cursor-pointer relative md:ml-8 md:my-0 md:py-4 text-xl my-4 pr-2  ">
                <AiOutlineShopping className="w-7 h-7" />
                <div className="w-5 h-5 bg-txt absolute top-2 right-0 text-primary flex items-center justify-center text-sm font-semibold rounded-full">
                  11
                </div>
              </li>
            )}
            <li className=" cursor-pointer md:ml-8 md:my-0 md:py-4 text-xl my-4 pr-5">
              {login ? (
                <img
                  src={avater}
                  alt="avater"
                  className="bg-yellow-500 h-8 w-8 rounded-full"
                />
              ) : (
                <Btn
                  child={"Login"}
                  cStyle="bg-txt text-primary px-3 rounded-full
                uppercase box-border shadow-xl hover:font-semibold duration-300 "
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
