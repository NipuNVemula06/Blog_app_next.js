import React from "react";
import "./BlogPage.css";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams || " ";
  return (
    <div className="blogpage">
      <h1 className="blogpage_title">{cat} Blog</h1>
      <div className="content">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
