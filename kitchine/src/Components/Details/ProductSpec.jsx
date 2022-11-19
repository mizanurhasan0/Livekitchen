import React, { useState } from "react";

const ProductSpec = () => {
  const [toggleState, setToggleState] = useState(1);
  // console.log(ProductsData[0]);
  return (
    <div className="py-10 ">
      <div className="">
        <div className="flex text-gray-500 font-bold">
          <button
            onClick={() => setToggleState(1)}
            className={`${
              toggleState === 1
                ? "bg-white border-t-2 border-l-2 border-primary"
                : "bg-primary text-txt"
            } p-4  cursor-pointer box-content relative outline-none uppercase`}
          >
            Description
          </button>
          <button
            onClick={() => setToggleState(2)}
            className={`${
              toggleState === 2
                ? "bg-white border-t-2 border-l-2 border-primary"
                : "bg-primary text-txt border-l-2  border-r-2"
            } p-4  cursor-pointer box-content relative outline-none uppercase`}
          >
            Purchase & Delivery
          </button>
          <button
            onClick={() => setToggleState(3)}
            className={`${
              toggleState === 3
                ? "bg-white border-t-2 border-r-2 border-primary"
                : "bg-primary text-txt"
            } p-4  cursor-pointer box-content relative outline-none uppercase`}
          >
            replace policy
          </button>
        </div>
        {/* content..... */}
        <div className="content-tabs">
          <div
            className={
              toggleState === 1
                ? "bg-white p-5 w-full h-full block text-gray-500"
                : "hidden"
            }
          >
            <h2 className="text-2xl uppercase">Content 1</h2>
            <hr className=" border-yellow-500" />
            <p className="text-xl text-justify pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>

          <div
            className={
              toggleState === 2
                ? "bg-white p-5 w-full h-full block text-gray-500"
                : "hidden"
            }
          >
            <h2 className="text-2xl uppercase">Content 2</h2>
            <hr />
            <p className="text-xl text-justify pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati praesentium incidunt quia aspernatur
              quasi quidem facilis quo nihil vel voluptatum?
            </p>
          </div>

          <div
            className={
              toggleState === 3
                ? "bg-white p-5 w-full h-full block text-gray-500"
                : "hidden"
            }
          >
            <h2 className="text-2xl uppercase">Content 3</h2>
            <hr />
            <p className="text-xl text-justify pt-2">
              Digital Kitchen Weight Scale. Product Type: Digital Kitchen Weight
              Scale. Max Weight Capacity: 10KG. Weighing Units: Gm / oz.
              Automatic switch off. Low battery and over load indication.
              Automatic zero resetting. Display LCD. Power Supply: 2AA x 1.5V
              battery Included.
            </p>
          </div>
        </div>
        {/* ENd content */}
      </div>
    </div>
  );
};

export default ProductSpec;
