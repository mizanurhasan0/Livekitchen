import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../Utils/Pagination";
import getQueryValue from "../../Utils/QueryValue";
import { OrdersNav, tableDb } from "../Shares/StaticData";
import Tables from "../Shares/Tables";
import TitleBar from "../Shares/TitleBar";

export default function OrderDash({ children }) {
  const [toggleState, setToggleState] = useState(1);
  const [currentPosts,setCurrentPosts]=useState(false)
  const navigate = useNavigate();
  let { search } = useLocation();

  useEffect(() => {
    setToggleState(getQueryValue(search, "status"));
  }, [toggleState]);

  return (
    <div className="py-10 px-5 bg-parag min-h-screen">
     <TitleBar title="Orders" btnName="Add Order"/>

      {/*  */}
      <div className=" bg-txt ">
        <div className="flex text-gray-500 font-bold border-b">
          {OrdersNav.map((list, i) => (
            <button
              key={i}
              onClick={() => {
                navigate(list.path);
                setToggleState(list.path);
              }}
              className={`${
                toggleState === list.active && "border-b-2  border-primary"
              } p-4 bg-white cursor-pointer box-content  outline-none uppercase`}
            >
              {list.name}
            </button>
          ))}
        </div>
        <div className="overflow-scroll">
            <Tables tblData={currentPosts}/>
            <div className="block text-center py-5 space-x-1 ">
          <Pagination setCurrentPosts={setCurrentPosts} />
        </div>
        </div>
      </div>
    </div>
  );
}
