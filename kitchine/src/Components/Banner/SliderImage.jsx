import React, { useState } from "react";
import { useEffect } from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import { BannerSlider } from "../Shares/StaticData";

const SliderImage = () => {
 
  return (
      <div  className="h-[30rem] xl:h-[40rem] bg-cover md:bg-top bg-center" style={{backgroundImage:`url(${BannerSlider[0].image})`}}></div>
  );
};

export default SliderImage;
