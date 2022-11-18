import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Btn from "../Shares/Btn";

export default function Product({ cardInfo }) {
  const navigate = useNavigate();
  return (
    <div className=" bg-white text-gray-700 relative shadow-lg hover:shadow-xl overflow-hidden text-center rounded-md">
      {/* New arrival icons */}
      <p className="absolute bg-primary text-white -right-1 top-4 px-auto px-1 md:px-2 uppercase md:font-bold z-10">
        new
      </p>
      <img
        onClick={() => navigate(`/${cardInfo?.id}`)}
        src={cardInfo.images[0]}
        alt="img"
        className="cursor-pointer  hover:scale-105 duration-500"
      />
      <h1 className="md:text-xl uppercase py-2">{cardInfo.name}</h1>

      <p className="font-light pb-2 text-xl">
        ${cardInfo.Price}
        <span className="line-through text-gray-400 pl-2 font-normal text-base">
          ${cardInfo.oldPrice}
        </span>
      </p>

      <Btn
        cStyle={`hover:bg-primary hover:text-txt
        border border-primary rounded-b-md  w-full text-primary  text-lg font-bold capitalize p-2`}
        child={
          <span className="flex items-center  justify-center ">
            <FaShoppingCart className="mr-2" />
            Add to card
          </span>
        }
      />
    </div>
  );
}
