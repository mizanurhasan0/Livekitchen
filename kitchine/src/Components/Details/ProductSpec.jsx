import React, { useState } from "react";

const ProductSpec = ({ productData }) => {
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
            <h2 className="text-2xl uppercase">Product Details</h2>
            <hr className=" border-yellow-500" />
            <p className="text-xl text-justify pt-2">
              {productData?.description}
            </p>
          </div>

          <div
            className={
              toggleState === 2
                ? "bg-white p-5 w-full h-full block text-gray-500"
                : "hidden"
            }
          >
            <h2 className="text-2xl uppercase">Delivery info</h2>
            <hr />
            <p className="text-xl text-justify pt-2">
              Estimated delivery time: processing time + Shipping time
              Processing time: Usually around 3-5 working days Shipping time:
              Standard shipping usually takes 10-15 days Expedited shipping
              usually takes 6-10 days
            </p>
          </div>

          <div
            className={
              toggleState === 3
                ? "bg-white p-5 w-full h-full block text-gray-500"
                : "hidden"
            }
          >
            <h2 className="text-2xl uppercase">Return your products</h2>
            <hr />
            <p className="text-xl text-justify pt-2">
              Returns & exchanges 30 days money back guarantee Requirement: 1.
              Returned items must be in their unused condition with the original
              packaging. 2. We do not accept returned items that were sent back
              without a proper return request. 3. We do not offer an FTC
              (Freight To Collect) service for the packages returned to us. The
              return is at your own expense. 4. Please double-check your returns
              before sending them. We are not responsible for returns of
              non-Kalesafe products. 5. All returns will be refunded with a
              credit note in the form of a business checkout code. For more
              information, please contact us: grameenshopbd4u@gmail.com
            </p>
          </div>
        </div>
        {/* ENd content */}
      </div>
    </div>
  );
};

export default ProductSpec;
