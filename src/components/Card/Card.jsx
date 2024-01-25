import React from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item, key }) => {
  const changeDateFromat = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };

  return (
    <div className="card" key={key}>
      {item.img && (
        <div className="card_imagecontainer">
          <Image className="card_image" src={item.img} alt="pic" fill />
        </div>
      )}
      <div className="card_textcontainer">
        <div className="card_detail">
          <span className="card_date">
            {changeDateFromat(item.createdAt)} -
          </span>
          <span className="card_category"> {item.slug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="card_title">{item.title}</h1>
        </Link>
        <p className="card_desc">{item.slug}</p>
        <Link href={`/posts/${item.title}`} className="card_link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
