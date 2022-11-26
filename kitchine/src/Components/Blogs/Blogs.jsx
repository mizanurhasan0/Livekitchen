import React from "react";
import { mug } from "../../Assets/Index";
import "./styleBlog.css";
import { AiOutlineArrowRight } from "react-icons/ai";
//
const Blogs = () => {
  return (
    <div className="container min-h-screen">
      {/* header */}
      <div className="flex justify-between">
        <h1 className="text-4xl">Blog</h1>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <p className="py-10 text-center text-primary capitalize">
          welcome to ecommerce website where unlimite source of all sorts of
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className=" bg-white text-gray-700 flex flex-col items-center shadow-xl ">
              <img
                //   onClick={() => navigate(`/${cardInfo?.id}`)}
                src={mug}
                alt="img"
                className="cursor-pointer   hover:scale-105 duration-500"
              />
              <div className="p-4">
                <p>
                  Oct 12,2022 in{" "}
                  <span className="text-primary">web promotion</span>
                </p>
                <h1 className="md:text-xl uppercase py-2">
                  conversion-focused web desing tips and tricks
                </h1>

                <p className="lineClamp text-justify">
                  Animations by their very nature tend to be highly
                  project-specific. The animations we include by default are
                  best thought of as helpful examples, and you’re encouraged to
                  customize your animations to better suit your needs. By
                  default, Tailwind provides utilities for four different
                  example animations, as well as the animate-none utility. You
                  can customize these values by editing theme.animation or
                  theme.extend.animation in your tailwind.config.js file.
                </p>
                <div className=" w-full my-5 flex justify-end">
                  <button className="group border border-primary flex items-center px-5 text-lg uppercase rounded-full shadow-md">
                    More{" "}
                    <AiOutlineArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-3 duration-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
