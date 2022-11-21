import React from "react";
import { banner5 } from "../../Assets/Index";

export default function About() {
  return (
    <div className="container my-10">
      <img
        src={banner5}
        alt="Banner"
        className=" xl:mt-0 bg-center  xl:h-[40rem] w-full"
      />
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
