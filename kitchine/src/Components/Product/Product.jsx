import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../Context/Shopping/ShoppingCartProvider";
import UserCtx from "../../Context/UserCtx";
import Btn from "../Shares/Btn";
import AlertToster from "../Shares/Toastify/AlertToster";

function CheckAdd(id) {
  const { cartItems } = useShoppingCart();
  // console.log(cartItems)
  return cartItems?.some((item) => item.productId._id === id);
}

export default function Product({ cardInfo = {} }) {
  const { user } = UserCtx();
  const { increaseCartQuantity, cartItems } = useShoppingCart();

  const navigate = useNavigate();
  // console.log(cardInfo)
  //
  //  console.log(cardInfo._id)
  // CheckAdd(cardInfo?._id);
  const onAddToCart = () => {
    if (user) {
      increaseCartQuantity(cardInfo._id, 1);
      AlertToster("Add your product!", "success");
    } else {
      AlertToster("Frist login your account!", "warning");
    }
  };

  return (
    <div className=" bg-white text-gray-700 relative shadow-lg hover:shadow-xl overflow-hidden text-center rounded-md">
      {/* New arrival icons */}
      <p className="absolute bg-primary text-white -right-1 top-4 px-auto px-1 md:px-2 uppercase md:font-bold z-10">
        new
      </p>
      <img
        crossOrigin="anonymous"
        onClick={() => navigate(`/${cardInfo?._id}`)}
        src={process.env.REACT_APP_URL_IMG + "/products/" + cardInfo?.images[0]}
        alt="img"
        className="cursor-pointer hover:scale-105 duration-500
        h-80"
      />
      <h1 className="md:text-xl uppercase py-2">{cardInfo?.name}</h1>

      <p className="font-light pb-2 text-xl">
        {cardInfo?.price}
        <span className="line-through text-gray-400 pl-2 font-normal text-base">
          {cardInfo?.buy}
        </span>
      </p>

      <Btn
        className={`hover:bg-primary hover:text-txt
        border border-primary rounded-b-md  w-full text-primary  text-lg font-bold capitalize p-2`}
        child={
          <span className="flex items-center  justify-center ">
            <FaShoppingCart className="mr-2" />
           {/* {CheckAdd(cardInfo?._id)?"Remove":"Add to card"}  */}
           Add to card
          </span>
        }
        onClick={onAddToCart}
      />
    </div>
  );
}
