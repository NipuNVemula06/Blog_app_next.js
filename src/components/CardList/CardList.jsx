import React from "react";
import "./CardList.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className="cardlist">
      <h1 className="cardlist_title">Recent Posts</h1>
      <div className="cardlist_posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
