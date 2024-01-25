import React from "react";
import "./CardList.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const getData = async ({ page }) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData(page);

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
