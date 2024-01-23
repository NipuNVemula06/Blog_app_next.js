import React from "react";
import "./Comments.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="comments">
      <h1 className="comments_title">Comments</h1>
      {status === "authenticated" ? (
        <div className="comments_write">
          <textarea
            placeholder="write a comment...."
            className="comments_input"
          />
          <button className="comments_button">Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="comments_boxcontainer">
        <div className="comment">
          <div className="comment_user">
            <Image
              src="/p1.jpeg"
              alt="user"
              width={50}
              height={50}
              className="comment_image"
            />
          </div>
          <div className="comment_userinfo">
            <span className="comment_username">Nipun Vemula</span>
            <span className="comment_date">01.01.2024</span>
          </div>
        </div>
        <p className="comment_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          rerum placeat vero quod ipsa voluptatum inventore nobis nisi beatae.
          Ad eaque velit commodi voluptate nemo eum aperiam maxime, beatae illo.
        </p>
      </div>
    </div>
  );
};

export default Comments;
