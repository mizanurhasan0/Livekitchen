import React from "react";
import { tableDb } from "../../Components/Shares/StaticData";
import Tables from "../../Components/Shares/Tables";

const ProductList = () => {
  const [currentPosts, setCurrentPosts] = useState(false);

  return (
    <div className="p-5 bg-head">
      <div className="bg-txt p-2 overflow-scroll rounded-md">
        <h1 className="text-4xl pb-5 capitalize text-default">Products</h1>
        <Tables tblData={currentPosts} />
        <div className="block text-center py-5 space-x-1 ">
          <Pagination setCurrentPosts={setCurrentPosts} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
