import React from "react";
import { banner4 } from "../Assets/Index";
import SliderImage from "../Components/Banner/SliderImage";
import Categoies from "../Components/Categories/Categoies";
import NewSugPro from "../Components/New&SugPro/NewSugPro";
export default function Home() {
  return (
    <div className="">
      <SliderImage />
      <Categoies />
      <NewSugPro title="latest Products " />
      <div className="container relative my-5 rounded-md overflow-hidden">
        <img src={banner4} alt="banner"/>
        <div className="absolute text-txt top-1/2 left-[30%] transform 
        -translate-x-1/2 -translate-y-1/2 uppercase space-y-2 ">
          <h1 className="text-4xl  font-semibold tracking-widest">Online Store</h1>
          <p className="text-xl tracking-widest">Up to 50% off</p>
        </div>
      </div>
      <NewSugPro title="Top new Arrival " />
    </div>
  );
}
