import React from "react";
import "./MenuCategories.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className="menu_categorylist">
      <Link href="/blog?cat=style" className="menu_categoryitem style">
        Style
      </Link>
      <Link href="/blog?cat=fashion" className="menu_categoryitem fashion">
        Fashion
      </Link>
      <Link href="/blog?cat=food" className="menu_categoryitem food">
        Food
      </Link>
      <Link href="/blog?cat=travel" className="menu_categoryitem travel">
        Travel
      </Link>
      <Link href="/blog?cat=culture" className="menu_categoryitem culture">
        Culture
      </Link>
      <Link href="/blog?cat=coding" className="menu_categoryitem coding">
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
