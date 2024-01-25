import React from "react";
import "./SinglePage.css";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";
import Menu from "@/components/Menu/Menu";

const getPostData = async ({ slug }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getPostData({ slug });

  const convertDateFormat = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="singlepage">
      <div className="singlepage_infocontainer">
        <div className="singlepage_textcontainer">
          <h1 className="singlepage_title">{data?.title}</h1>
          <div className="singlepage_user">
            {data?.user?.image && (
              <div className="singlepage_userimagecontainer">
                <Image
                  src={data.user.image}
                  alt={data.user.name}
                  fill
                  className="singlepage_userimage"
                />
              </div>
            )}
            <div className="singlepage_usertextcontainer">
              <span className="singlepage_username">{data?.user.name}</span>
              <span className="singlepage_date">
                {convertDateFormat(data?.createdAt)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="singlepage_imagecontainer">
            <Image
              src={data?.img}
              alt={data?.title}
              fill
              className="singlepage_postimage"
            />
          </div>
        )}
      </div>
      <div className="singlepage_content">
        <div className="singlepage_post">
          <div
            className="singlepage_description"
            dangerouslySetInnerHTML={
              { __html: data?.desc || "" } //eslint-disable-line
            }
          />
          <div className="singlepage_coomment">
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
