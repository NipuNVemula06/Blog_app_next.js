import React from "react";
import "./Feature.css";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="feature">
      <h1 className="feature_title">
        <b>Hey, Nipun here! </b>
        Discover my stories and creative ideas.
      </h1>
      <div className="feature_post">
        <div className="feature_imagecontainer">
          <Image
            className="feature_image"
            src="https://images.unsplash.com/3/doctype-hi-res.jpg?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic"
            fill
          />
        </div>
        <div className="feature_textcontainer">
          <h2 className="feature_posttitle">
            The Symphony of Web Development: Crafting Harmonious Digital
            Experiences
          </h2>
          <p className="feature_postdesc">
            Explore the frontend realm, where HTML, CSS, and JavaScript come
            together in a choreographed dance to create visually stunning and
            interactive user interfaces. Discover the latest trends in frontend
            frameworks like React, Angular, and Vue.js, and how they orchestrate
            seamless user experiences.
          </p>
          <button className="feature_button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
