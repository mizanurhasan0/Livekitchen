import React from "react";
import {
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterInfo } from "../Shares/StaticData";
const Footer = () => {
  return (
    <div className="my-10 font-Lato container">
      <div className="flex justify-end border-b-2 border-primary">
        <span className="flex items-center text-primary">
          <AiFillTwitterSquare className="w-10 h-10 " />
          <AiFillFacebook className="w-10 h-10 " />
          <FaPinterestSquare className="w-9 h-9 " />
          <AiFillGooglePlusSquare className="w-10 h-10 " />
        </span>
      </div>
      {/*  */}
      <div className="mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-10">
          {FooterInfo.map((data, key) => {
            return (
              <div key={key} className="capitalize ">
                <h1 className="text-xl text-gray-600 font-Audiowide">{data.title}</h1>
                <ul className="text-primary">
                  {data.list.map((link, key) => (
                    <li key={key} className="py-1">
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="capitalize ">
            <h1 className="text-xl text-gray-600 font-Audiowide ">Contact Us</h1>
            <ul className="text-primary">
              <li className="py-1 flex items-center ">
                <BiLocationPlus className="mr-1 " />
                House:10/A, Mirpur-2,Dhak
              </li>
              <li className="py-1 flex items-center ">
                <AiOutlineMail className="mr-1 " />
                support@kitchen.com
              </li>
              <li className="py-1 flex items-center ">
                <AiOutlineMobile className="mr-1 " />
                +880 1818-674298
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
