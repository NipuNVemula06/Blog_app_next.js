import React from "react";
import "./MenuPosts.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="menu_items">
      <Link href="/" className="menu_item">
        {withImage && (
          <div className="menu_imagecontainer">
            <Image src="/p1.jpeg" alt="image" fill className="menu_image" />
          </div>
        )}
        <div className="menu_textcontainer">
          <span className="menu_category menu_travel">Travel</span>
          <h3 className="menu_posttitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="menu_detail">
            <span className="menu_username">Nipun Vemula</span>
            <span className="menu_date"> - 24.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="menu_item">
        {withImage && (
          <div className="menu_imagecontainer">
            <Image src="/p1.jpeg" alt="" fill className="menu_image" />
          </div>
        )}
        <div className="menu_textcontainer">
          <span className="menu_category menu_culture">Culture</span>
          <h3 className="menu_posttitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.
          </h3>
          <div className="menu_detail">
            <span className="menu_username">Nipun Vemula</span>
            <span className="menu_date"> - 24.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="menu_item">
        {withImage && (
          <div className="menu_imagecontainer">
            <Image src="/p1.jpeg" alt="" fill className="menu_image" />
          </div>
        )}
        <div className="menu_textcontainer">
          <span className="menu_category menu_food">Food</span>
          <h3 className="menu_posttitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.
          </h3>
          <div className="menu_detail">
            <span className="menu_username">Nipun Vemula</span>
            <span className="menu_date"> - 24.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="menu_item">
        {withImage && (
          <div className="menu_imagecontainer">
            <Image src="/p1.jpeg" alt="" fill className="menu_image" />
          </div>
        )}
        <div className="menu_textcontainer">
          <span className="menu_category menu_fashion">Fashion</span>
          <h3 className="menu_posttitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.
          </h3>
          <div className="menu_detail">
            <span className="menu_username">Nipun Vemula</span>
            <span className="menu_date"> - 24.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="menu_item">
        {withImage && (
          <div className="menu_imagecontainer">
            <Image src="/p1.jpeg" alt="" fill className="menu_image" />
          </div>
        )}
        <div className="menu_textcontainer">
          <span className="menu_category menu_coding">Coding</span>
          <h3 className="menu_posttitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.
          </h3>
          <div className="menu_detail">
            <span className="menu_username">Nipun Vemula</span>
            <span className="menu_date"> - 24.01.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
