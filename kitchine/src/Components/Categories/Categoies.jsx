import React from "react";
import { useNavigate } from "react-router-dom";
import UserCtx from "../../Context/UserCtx";
import HeaderTitle from "../Shares/HeaderTitle";

const Categoies = () => {
  const { category } = UserCtx();
  const navigate=useNavigate()
  return (
    <div className="container my-10  font-Audiowide">
      {/* Header title compoenets */}
      <HeaderTitle title={"KITCHEN & DINING CATEGORY"} />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 ">
        {category.map((item, i) => (
          <div onClick={()=>navigate(`/shops?id=${item?._id+'&field=category001'}`)}
            key={i}
            className="relative group hover:shadow-lg border border-primary h-60 rounded-xl overflow-hidden shadow-xl cursor-pointer flex flex-col items-center"
          >
            <h1
              className="absolute  text-2xl text-primary font-bold uppercase text-center h-full flex items-center justify-center
        w-full bg-txt bg-opacity-90 group-hover:opacity-0 duration-500"
            >
              {item.name}
            </h1>

            <img
              crossOrigin="anonymous"
              src={
                process.env.REACT_APP_URL_IMG + "/category/" + item.images[0]
              }
              className="w-auto h-full group-hover:scale-110 duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoies;
