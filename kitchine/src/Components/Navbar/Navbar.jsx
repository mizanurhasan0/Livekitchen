import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { NavItems } from "../Shares/StaticData";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Shares/Btn";
import { avater } from "../../Assets/Index";
import UserCtx from "../../Context/UserCtx";
import "./navbar.css";
import UseRequest from "../../Hooks/UseRequest";
import { useShoppingCart } from "../../Context/Shopping/ShoppingCartProvider";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [login, setLogin] = useState(false);
  const { carts, user, setUser, setUserUpdate } = UserCtx();
  const { cartQuantity } = useShoppingCart();
  const navigate = useNavigate();
  const req = UseRequest();
  //
  const logout = () => {
    req({ uri: "logout", method: "GET" }).then((res) => {
      if (res.status === 200) {
        setUser(null);
        setUserUpdate(v => v === false ? true : false)
      }
    });
  };
  // 
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20 text-txt font-Audiowide ">
      <div className="bg-primary px-2 sm:px-0">
        <div className="container md:flex items-center justify-between ">
          <div className="flex items-center space-x-2 ">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
            <span className="hidden xl:block capitalize tracking-widest">
              Grameen Shop BD
            </span>
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
            className={`${open ? "top-20" : "top-[-490px]"
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
                className="cursor-pointer md:ml-8 md:my-0 md:py-4 xl:text-xl my-4 uppercase"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            {user && (
              <li
                onClick={() => navigate("/carts")}
                className=" cursor-pointer relative md:ml-8 md:my-0 md:py-4 xl:text-xl my-4 pr-2  "
              >
                <AiOutlineShopping className="w-7 h-7" />
                <div className="w-5 h-5 bg-txt absolute top-2 right-0 text-primary flex items-center justify-center text-sm font-Roboto font-semibold rounded-full">
                  {cartQuantity | 0}
                </div>
              </li>
            )}
            <li className=" cursor-pointer md:ml-8 md:my-0 md:py-4 xl:text-xl my-4 pr-5">
              {user ? (
                <div className="group relative h-30 ">
                  <label htmlFor="checkbox_toggle" className="cursor-pointer">
                    <img
                      src={avater}
                      alt="avater"
                      className=" h-8 w-12 rounded-full"
                    />
                  </label>
                  <input
                    className="hidden"
                    type="checkbox"
                    id="checkbox_toggle"
                  />

                  <ul
                    className="profile md:absolute bg-txt text-primary p-2 border border-primary 
                  space-y-2 mt-3 rounded-md -left-10 shadow-lg"
                  >
                    <li className="hover:bg-gray-100">profile</li>
                    <li className="hover:bg-gray-100" onClick={() => logout()}>
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <Btn onClick={() => navigate("/login")}
                  child={"Login"}
                  className="bg-txt text-primary px-3 rounded-full
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
