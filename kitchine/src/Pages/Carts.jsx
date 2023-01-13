import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { useShoppingCart } from "../Context/Shopping/ShoppingCartProvider";
import AlertToster from "../Components/Shares/Toastify/AlertToster";
import UseRequest from "../Hooks/UseRequest";
import { formatCurrency } from "../Utils/formatCurrency";
import IncDecCounter from "../Components/Shares/IncDecCounter/IncDecCounter";

export default function Carts() {
  const {  cartQuantity, removeFromCart } = useShoppingCart();
  // const [itemsPrice, setItemPrice] = useState(0);
  const [listItems, setListitems] = useState([]);

  const req = UseRequest();
  // Methods
  const fetchCarts = async () => {
    try {
      await req({ uri: "carts", method: "GET" })
        .then((res) => {
          console.log(res);
          res.status === 401 && setListitems([]);
          res.status === 201 && setListitems(res?.newInstance?.products);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   carts?.products?.map((product, key) => {
  //     setItemPrice(
  //       (price) => price + product?.productId?.price * product.quantity
  //     );
  //   });
  // }, []);
  useEffect(() => {
    fetchCarts();
  }, []);

  // onDelete method
  const onDeleteItem = (id) => {
    removeFromCart(id).then((res) => {
      if (res) {
        fetchCarts();
        AlertToster("Deleted", "success");
      } else {
        AlertToster("Something went wrong!", "error");
      }
    });
    //  fetchCarts();
  };

  return (
    <div className="container mt-20 min-h-screen text-gray-500">
      <div className="grid grid-cols-3 gap-5 py-20">
        <div className="col-span-3 xl:col-span-2 border border-primary border-opacity-10 shadow-2xl p-2 rounded-md">
          <h1 className="text-4xl pb-5 ">Shopping Cart</h1>

          {/* cart lists */}
          {listItems.length === 0 ? (
            <h1 className="text-2xl font-Silkscreen text-primary  h-full flex items-center justify-center">Cart is empty!!!</h1>
          ) : (
            listItems?.map((product, key) => (
              <div
                key={key}
                className="pt-2 pb-2 gap-3 border-t border-primary  flex items-center justify-between"
              >
                <div className="flex items-center  space-x-5">
                  <img
                    crossOrigin="anonymous"
                    src={
                      process.env.REACT_APP_URL_IMG +
                      `/products/` +
                      product?.productId?.images[0]
                    }
                    alt=""
                    className="h-32 w-32"
                  />
                  <div>
                    <span className="capitalize text-xl">{product?.productId?.name}</span>
                    <h4 className=" uppercase">{product?.productId?.brand}</h4>
                  </div>
                </div>
                {/*  */}
                <div className="flex space-x-5">
                  <IncDecCounter />
                  {/* <div className="flex text-primary">
                  <button className="bg-parag px-5 font-bold rounded-lg">
                    -
                  </button>
                  <input
                    type="number"
                    defaultValue={product?.quantity}
                    className="w-10 text-center"
                  />
                  <button className="bg-parag px-5 font-bold rounded-lg cursor-pointer">
                    +
                  </button>
                </div> */}
                  <p className="w-48 text-center">
                    {formatCurrency(
                      product?.quantity * product?.productId?.price
                    )}{" "}
                  </p>
                  {/* <AiOutlineReload
                  onClick={() => onDeleteItem(product?.productId?._id)}
                  size={26}
                  className="cursor-pointer text-green-600 "
                /> */}
                  <AiOutlineCloseSquare
                    onClick={() => onDeleteItem(product?.productId?._id)}
                    size={26}
                    className="cursor-pointer text-primary"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        {/* Details */}
        <div className="col-span-3 xl:col-span-1 rounded-md">
          <div className="bg-parag bg-opacity-20 border border-primary border-opacity-10 shadow-2xl p-5 min-h-[80vh]">
            <h1 className="text-2xl py-2">Summary</h1>
            <hr />
            <div className="space-y-4 text-xl capitalize">
              <div
                className="flex justify-between 
          items-center mt-5"
              >
                <p>items {cartQuantity}</p>
                <span>{0} TK</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping</p>
                <span>32.00 TK</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Total</p>
                <span>32.00 TK</span>
              </div>
            </div>
            <button
              className="border border-primary w-full bg-txt text-primary
           uppercase my-2 rounded-sm text-lg "
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
