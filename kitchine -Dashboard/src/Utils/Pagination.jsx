import React, { useState } from "react";
import { useEffect } from "react";
import { tableDb } from "../Components/Shares/StaticData";

export default function Pagination({ setCurrentPosts }) {
  const [tblDate, setTblDate] = useState(tableDb);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    setCurrentPosts({
      ...tblDate,
      data: tblDate.data.slice(firstPostIndex, lastPostIndex),
    });
  }, [currentPage]);

  const changePage = (val, type) => {
    type === "pre" && currentPage > 1 && setCurrentPage((v) => v - 1);

    type === "next" &&
      currentPage < Math.ceil(tblDate.data.length / postsPerPage) &&
      setCurrentPage((v) => v + 1);

    type === "field" &&
      val > 0 &&
      val <= Math.ceil(tblDate.data.length / postsPerPage) &&
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
        of {Math.ceil(tblDate.data.length / postsPerPage)}
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
