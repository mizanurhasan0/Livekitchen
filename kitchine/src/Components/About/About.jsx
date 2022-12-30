import React from "react";
import { banner1 } from "../../Assets/Index";

export default function About() {
  return (
    <div className=" my-10 min-h-[80vh]">
      <div className="relative">
        <img
          src={banner1}
          alt="Banner"
          className=" xl:mt-0 bg-center  
          xl:h-[40rem] w-full opacity-40"
        />
        <h1 className="absolute top-1/2 left-1/2 text-6xl text-primary font-Audiowide">
          About
        </h1>
      </div>
      <div className="text-center container">
        <h1 className="text-4xl uppercase py-10">Our Mission</h1>
        <p className="text-lg pb-10">
          As the number of software tools we use to run out businesses
          containues to grow, we are generating more and more data in more and
          more places. at databox,our out mission is to make it as easy as
          possible for everyone in a company to monitor,analyze and iprove
          performance in one spot on any device{" "}
        </p>
      </div>
    </div>
  );
}
