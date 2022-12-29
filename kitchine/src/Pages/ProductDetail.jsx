import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductInfo } from "../Components/Details/ProductInfo";
import ProductSpec from "../Components/Details/ProductSpec";
import NewSugPro from "../Components/New&SugPro/NewSugPro";
import Loading2 from "../Components/Shares/Loading/Loading2";
import UseRequest from "../Hooks/UseRequest";

export const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const req = UseRequest();
  const itemId = useParams();

  useEffect(() => {
    setLoading(true);
    req({ uri: `products/${itemId.id}`, method: "GET" })
      .then((res) => {
        setProductData(res?.newInstance);
        req({
          uri: `products/category/${res?.newInstance?.category}`,
          method: "GET",
        }).then((res) => setRelatedProduct(res?.data));
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="container pt-16 min-h-[70vh] mt-10 ">
      {!loading ? (
        <>
          {" "}
          <ProductInfo productData={productData} />
          {/*  footer */}
          {/* Product details */}
          <ProductSpec productData={productData} />
          <NewSugPro title="Related Products" topProducts={relatedProduct} />
        </>
      ) : (
        <Loading2 />
      )}
    </div>
  );
};
