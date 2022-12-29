import React, { useState, useEffect } from "react";
import UseRequest from "../../Hooks/UseRequest";
import { tableDb } from "./StaticData";

export default function Pagination1({ products, setCurrentProducts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(
    process.env.REACT_APP_PRODUCT_PER_PAGE
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    setCurrentProducts(products.slice(firstPostIndex, lastPostIndex));
  }, [currentPage]);

  const changePage = (val, type) => {
    type === "pre" && currentPage > 1 && setCurrentPage((v) => v - 1);

    type === "next" &&
      currentPage < Math.ceil(products.length / postsPerPage) &&
      setCurrentPage((v) => v + 1);

    type === "field" &&
      val > 0 &&
      val <= Math.ceil(products.length / postsPerPage) &&
      setCurrentPage(val);
  };
  return (
    <>
      <button
        onClick={() => changePage(currentPage, "pre")}
        className="bg-primary px-2 text-txt rounded-md"
      >
        Prev
      </button>
      <span>
        <input
          type="number"
          value={currentPage}
          name="pageNumber"
          onChange={(e) => changePage(e.target.value, "field")}
          className="w-10 border-primary border text-center outline-none rounded-md "
        />
        of {Math.ceil(products.length / postsPerPage)}
      </span>
      <button
        onClick={() => changePage(currentPage, "next")}
        className="bg-primary px-2 text-txt rounded-md"
      >
        Next
      </button>
    </>
  );
}
