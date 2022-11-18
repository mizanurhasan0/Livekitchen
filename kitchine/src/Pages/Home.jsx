import React from "react";
import SliderImage from "../Components/Banner/SliderImage";
import Categoies from "../Components/Categories/Categoies";
import Footer from "../Components/Footer/Footer";
import NewSugPro from "../Components/New&SugPro/NewSugPro";
export default function Home() {
  return (
    <div className=" flex flex-col">
      <SliderImage />
      <Categoies />
      <NewSugPro title="latest Products" />
    </div>
  );
}
