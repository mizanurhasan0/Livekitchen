import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiFillCaretDown, AiFillBell } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { SideMenuItem } from "../Shares/StaticData";
import { profile } from "../../Assets/Index";
import TopBar from "./TopBar";
import { useRef } from "react";
import OutSideClick from "../../Utils/OutSideClick";
import { CiLogout } from "react-icons/ci";
import UseRequest from "../../Hooks/UseRequest";
import AlertToster from "../Shares/Toastify/AlertToster";
import UserCtx from "../../Context/UserCtx";

const Sidebar = () => {
  const [subMenu, setSubmenu] = useState(false);
  const [minSidebar, setMinSidebar] = useState(false);
  const { user, setUser } = UserCtx();
  const navigate = useNavigate();
  const navRef = useRef();
  const req = UseRequest();

  // OutSideClick(navRef, setSubmenu);
  const onActiveSubmenu = (item) => {
    setSubmenu((val) => (val === item.name ? false : item.name));
    !item.subItems && navigate(item.path);
  };
  //
  const onLogout = () => {
    req({ uri: "logout" }).then((res) => {
      if (res.status === 200) {
        AlertToster("Logout", "success");
        setUser(null);
        navigate("/");
      } else {
        AlertToster("Something went wrong", "error");
      }
    });
  };
  return (
    <div className="flex flex-row h-screen w-full  ">
      <div
        className={`${
          minSidebar ? "min-w-[4rem] w-[4rem] overflow-hidden" : "w-72"
        } bg-primary text-txt  border-r-4 border-primary shadow-lg text-lg 
        duration-500`}
      >
        {/* Logo */}
        <div
          className={`${
            minSidebar ? "invisible" : "visible"
          } px-5 bg-txt text-primary flex  
        justify-between py-4 overflow-hidden  `}
        >
          <h1 className="text-2xl font-semibold uppercase">Online</h1>
          <span className="bg-primary text-txt capitalize px-2 rounded-md">
            Admin
          </span>
          {/* Side Link list */}
        </div>
        <ul className="mt-5 ">
          {SideMenuItem?.map((item, i) => (
            <li key={i} className={`cursor-pointer`}>
              <div
                className={`${
                  subMenu === item.name && "bg-txt text-primary"
                } my-2  py-2 px-4 flex items-center justify-between`}
                onClick={() => onActiveSubmenu(item)}
              >
                <div className="flex items-center">
                  <item.icon size={30} className="mr-4" />
                  {item.name}
                </div>
                <AiFillCaretDown
                  size={15}
                  className={`${!item.subItems && "hidden"} ${
                    item.name === subMenu ? "rotate-180 " : "rotate-0"
                  } transition-all duration-700`}
                />
              </div>
              {item.subItems && (
                <ul
                  ref={navRef}
                  className={`${
                    subMenu === item.name
                      ? minSidebar
                        ? `absolute -mt-14 ml-[4.1rem]  rounded-sm
                         bg-primary z-10`
                        : `block`
                      : "hidden"
                  } ml-10 py-2  capitalize text-base `}
                >
                  {item.subItems.map((subItem, i) => (
                    <li
                      key={i}
                      className="hover:bg-txt hover:text-primary pl-6 py-2 rounded-l-sm pr-4 mb-2"
                      onClick={() =>
                        (!minSidebar ? "" : setSubmenu(!subMenu)) &
                        navigate(`${subItem.path}`)
                      }
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`absolute bottom-10 text-txt flex pl-5 cursor-pointer`}
          onClick={() => onLogout()}
        >
          <CiLogout size={30} className=" mr-4" />
          <span className={`${minSidebar ? "hidden" : "block"} text-2xl`}>
            Logout
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <TopBar setMinSidebar={() => setMinSidebar(!minSidebar)} />
        <div className="overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
