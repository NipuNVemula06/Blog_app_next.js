import React from "react";
import "./CategoryList.css";
import Link from "next/link";
import Image from "next/image";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.BASE_URL;

const getCategoriesData = async () => {
  const res = await fetch(`${baseURL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getCategoriesData();
  return (
    <div className="categories">
      <h1 className="categories_title">Popular Categories</h1>
      <div className="categories_list">
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blog?cat=${item.slug}`}
            className={`category ${item.slug}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className="category_image"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
