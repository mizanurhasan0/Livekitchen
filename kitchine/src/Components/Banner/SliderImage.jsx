import React, { useState } from "react";
import { useEffect } from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import {banner1} from "../../Assets/Index"

const SliderImage = () => {
 
  return (
      <div  className="h-[30rem] xl:h-[40rem] bg-cover md:bg-top bg-center" style={{backgroundImage:`url(${banner1})`}}></div>
  );
};

export default SliderImage;
