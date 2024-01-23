import React from "react";
import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <button disabled className="pagination_button">
        Previous
      </button>
      <button className="pagination_button">Next</button>
    </div>
  );
};

export default Pagination;
