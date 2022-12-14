import React from "react";
import { Zoom } from "react-slideshow-image";
// https://react-slideshow-image.netlify.app/?path=/docs/examples-zoomin--default
import "./sliderImage.css";
import { slider1, slider2, slider3, slider4 } from "../../Assets/Index";

export default function ImageSlider() {
  const images = [slider1, slider2, slider3, slider4];

  return (
    <Zoom scale={1.4}>
      {images.map((img, key) => (
        <div key={key} className="each-slide-effect">
          <div
            className="font-Lobster "
            style={{ backgroundImage: `url(${images[key]})` }}
          >
            <span className="text-xl items-center xl:text-3xl flex flex-col capitalize text-primary bg-txt p-5 rounded-md bg-opacity-70 shadow-md">
            All Products Are Imported From China
            <span className=" mt-5">Order Now: 01644-433613.</span>
            </span>

          </div>
        </div>
      ))}
    </Zoom>
  );
}
