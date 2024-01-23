import React from "react";
import "./CategoryList.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="categories">
      <h1 className="categories_title">Popular Categories</h1>
      <div className="categories_list">
        <Link href="/blog?cat=style" className="category style">
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className="category_image"
          />
          style
        </Link>
        <Link href="/blog?cat=style" className="category fashion">
          <Image
            src="/fashion.png"
            alt="fashion"
            width={32}
            height={32}
            className="category_image"
          />
          fashion
        </Link>
        <Link href="/blog?cat=style" className="category food">
          <Image
            src="/food.png"
            alt="food"
            width={32}
            height={32}
            className="category_image"
          />
          food
        </Link>
        <Link href="/blog?cat=style" className="category travel">
          <Image
            src="/travel.png"
            alt="travel"
            width={32}
            height={32}
            className="category_image"
          />
          travel
        </Link>
        <Link href="/blog?cat=style" className="category culture">
          <Image
            src="/culture.png"
            alt="culture"
            width={32}
            height={32}
            className="category_image"
          />
          culture
        </Link>
        <Link href="/blog?cat=style" className="category coding">
          <Image
            src="/coding.png"
            alt="coding"
            width={32}
            height={32}
            className="category_image"
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
