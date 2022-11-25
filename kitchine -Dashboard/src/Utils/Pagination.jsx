import React, { useState } from "react";

export default function Pagination({ tblDate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = {
    ...tblDate,
    data: tblDate.data.slice(firstPostIndex, lastPostIndex),
  };

  const changePage = (val, type) => {
    if (type === "pre") {
      if (currentPage > 1) {
        setCurrentPage((v) => v - 1);
      }
    }
    if (type === "next") {
      if (currentPage < Math.ceil(tblDate.data.length / postsPerPage))
        setCurrentPage((v) => v + 1);
    }
    if (type === "field") {
      if (val > 0 && val <= Math.ceil(tblDate.data.length / postsPerPage))
        setCurrentPage(val);
    }
  };
}
