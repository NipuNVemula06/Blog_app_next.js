import React from "react";
import "./CardList.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const getPostsData = async ({ page, cat }) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPostsData({ page, cat });

  const POST_PER_PAGE = 4;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="cardlist">
      <h1 className="cardlist_title">Recent Posts</h1>
      <div className="cardlist_posts">
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
