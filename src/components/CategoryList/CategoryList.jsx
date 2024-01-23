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
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="category_image"
          />
          style
        </Link>
        <Link href="/blog?cat=fashion" className="category fashion">
          <Image
            src="/fashion.jpg"
            alt="fashion"
            width={32}
            height={32}
            className="category_image"
            quality={100}
          />
          fashion
        </Link>
        <Link href="/blog?cat=food" className="category food">
          <Image
            src="/food.jpg"
            alt="food"
            width={32}
            height={32}
            className="category_image"
          />
          food
        </Link>
        <Link href="/blog?cat=travel" className="category travel">
          <Image
            src="/travel.jpg"
            alt="travel"
            width={32}
            height={32}
            className="category_image"
          />
          travel
        </Link>
        <Link href="/blog?cat=culture" className="category culture">
          <Image
            src="/culture.jpg"
            alt="culture"
            width={32}
            height={32}
            className="category_image"
          />
          culture
        </Link>
        <Link href="/blog?cat=coding" className="category coding">
          <Image
            src="/coding.jpg"
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
