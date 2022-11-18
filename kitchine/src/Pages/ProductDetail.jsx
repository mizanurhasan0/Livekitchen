import React from "react";

import { ProductInfo } from "../Components/Details/ProductInfo";
import ProductSpec from "../Components/Details/ProductSpec";
import NewSugPro from "../Components/New&SugPro/NewSugPro";

export const ProductDetail = () => {
  return (
    <div className="pt-16 ">
      <ProductInfo />
      {/*  footer */}

      {/* Product details */}
      <ProductSpec />
      <NewSugPro title="Related Products" />
    </div>
  );
};
