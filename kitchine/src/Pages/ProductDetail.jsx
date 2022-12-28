import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductInfo } from "../Components/Details/ProductInfo";
import ProductSpec from "../Components/Details/ProductSpec";
import NewSugPro from "../Components/New&SugPro/NewSugPro";
import UseRequest from "../Hooks/UseRequest";

export const ProductDetail = () => {
  const [productData,setProductData]=useState(null)
  const [relatedProduct,setRelatedProduct]=useState(null)
  const req=UseRequest();
  const itemId=useParams();


  useEffect(() => {
    req({uri:`products/${itemId.id}`,method:"GET"}).then(res=>{setProductData(res?.newInstance);
      req({uri:`products/category/${res?.newInstance?.category}`,method:"GET"}).then(res=>setRelatedProduct(res?.newInstance))
     } )
  }, [])
  
  return (
    <div className="container pt-16 ">
      <ProductInfo productData={productData}/>
      {/*  footer */}

      {/* Product details */}
      <ProductSpec productData={productData}/>
      <NewSugPro title="Related Products" topProducts={relatedProduct} />
    </div>
  );
};
