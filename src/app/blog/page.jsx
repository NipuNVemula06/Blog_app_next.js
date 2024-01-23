import React from "react";
import "./BlogPage.css";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <h1 className="blogpage_title">Style Blog</h1>
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
