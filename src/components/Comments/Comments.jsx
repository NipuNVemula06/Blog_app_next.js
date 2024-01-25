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

  const { data, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  // convert the time
  const timeAgo = (timestamp) => {
    const currentTime = new Date();
    const previousTime = new Date(timestamp);
    const timeDifferenceInSeconds = Math.floor(
      (currentTime - previousTime) / 1000
    );

    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours} hour ago`;
    } else {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days} days ago`;
    }
  };

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate(); //used to revalidate the data
    setDesc("");
  };

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
          <button className="comments_button" onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="comments_boxcontainer">
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <div className="comment" key={item._id}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt={item.user.name}
                    width={40}
                    height={40}
                    className="comment_image"
                  />
                )}
                <div className="comment_user">
                  <div className="comment_userinfo">
                    <span className="comment_username">{item.user.name}</span>
                    <span className="comment_date">
                      {timeAgo(item.createdAt)}
                      {/* {item.createdAt.substring(0, 10)} */}
                    </span>
                  </div>
                  <p className="comment_desc">{item.desc}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
