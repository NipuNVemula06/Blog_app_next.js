import React from "react";
import "./Feature.css";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="feature">
      <h1 className="feature_title">
        <b>Hey, Nipun here!, </b>
        Discover my stories and creative ideas.
      </h1>
      <div className="feature_post">
        <div className="feature_imagecontainer">
          <Image className="feature_image" src="/p1.jpeg" alt="pic" fill />
        </div>
        <div className="feature_textcontainer">
          <h2 className="feature_posttitle">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h2>
          <p className="feature_postdesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="feature_button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
