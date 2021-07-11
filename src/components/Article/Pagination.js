import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ prev, next }) => {
  let count = prev + next;
  let paginationLinks = [];
  let currentIndex = prev + 1;

  if (prev > 0) {
    paginationLinks.push(
      <Link to={`/article?page=${currentIndex - 1}`} className="mx-2">
        <div className="bg-orange text-white text-md px-4 py-2 rounded-full shadow-lg">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-left"></i>
        </div>
      </Link>
    );
  }

  for (let i = 1; i <= count; i++) {
    paginationLinks.push(
      <Link to={`/article?page=${i}`} className="mx-2">
        <div
          className={`bg-orange text-white text-md px-4 py-2 rounded-md shadow-lg ${
            i === currentIndex && "current"
          }`}
        >
          {i}
        </div>
      </Link>
    );
  }

  if (next > 0) {
    paginationLinks.push(
      <Link to={`/article?page=${currentIndex + 1}`} className="mx-2">
        <div className="bg-orange text-white text-md px-4 py-2 rounded-full shadow-lg">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex justify-end" style={{ paddingBottom: "6%" }}>
      {paginationLinks.map((link) => link)}
    </div>
  );
};

export default Pagination;
