"use client";

import React from "react";
import "./Pagination.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="pagination">
      <button
        disabled={!hasPrev}
        className="pagination_button"
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="pagination_button"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
