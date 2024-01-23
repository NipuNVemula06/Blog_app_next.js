import React from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="card">
      <div className="card_imagecontainer">
        <Image className="card_image" src="/p1.jpeg" alt="pic" fill />
      </div>
      <div className="card_textcontainer">
        <div className="card_detail">
          <span className="card_date">24.01.2024 - </span>
          <span className="card_category">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="card_title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className="card_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam
          consequatur ducimus adipisci optio, sed vero deleniti illum provident
          temporibus, libero nisi assumenda unde quos, esse nemo ratione
          voluptate ea.
        </p>
        <Link href="/" className="card_link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
