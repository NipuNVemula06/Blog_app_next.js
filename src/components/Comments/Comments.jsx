"use client";

import React, { useState } from "react";
import "./Comments.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr"; // swr is a  react hook for data fetching (swr= state-while-revalidate) library
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const [desc, setDesc] = useState("");
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  return (
    <div className="comments">
      <h1 className="comments_title">Comments</h1>
      {status === "authenticated" ? (
        <div className="comments_write">
          <textarea
            placeholder="write a comment...."
            className="comments_input"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="comments_button">Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="comments_boxcontainer">
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <div className="comment_box" key={item._id}>
                <div className="comment">
                  <div className="comment_user">
                    {item?.user?.image && (
                      <Image
                        src={item.user.image}
                        alt={item.user.name}
                        width={40}
                        height={40}
                        className="comment_image"
                      />
                    )}
                  </div>
                  <div className="comment_userinfo">
                    <span className="comment_username">{item.user.name}</span>
                    <span className="comment_date">
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className="comment_desc">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
