import React from "react";
import "./SinglePage.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className="singlepage">
      <div className="singlepage_infocontainer">
        <div className="singlepage_textcontainer">
          <h1 className="singlepage_title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="singlepage_user">
            <div className="singlepage_userimagecontainer">
              <Image
                src="/p1.jpeg"
                alt="userimage"
                fill
                className="singlepage_userimage"
              />
            </div>
            <div className="singlepage_usertextcontainer">
              <span className="singlepage_username">Nipun Vemula</span>
              <span className="singlepage_date">24 January 2024</span>
            </div>
          </div>
        </div>
        <div className="singlepage_imagecontainer">
          <Image
            src="/p1.jpeg"
            alt="iimage"
            fill
            className="singlepage_postimage"
          />
        </div>
      </div>
      <div className="singlepage_content">
        <div className="singlepage_post">
          <div className="singlepage_description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facere nulla aut ducimus magni totam tempora nemo saepe
              consequatur. Natus dicta autem iure ea, voluptatibus provident
              architecto odio minus rem quae, ratione perferendis deleniti
              voluptate atque impedit porro, corporis hic repellat laudantium
              blanditiis dolor! Assumenda iure itaque neque, sed libero saepe,
              fugit pariatur fuga placeat quibusdam magnam molestiae. Sint velit
              iste eaque accusantium nihil provident aspernatur vel
              consequuntur, incidunt id soluta! Nesciunt molestias adipisci,
              quasi nisi reiciendis laborum quia alias ab, sit quo sunt.
              Veritatis a excepturi officiis aperiam, in corporis deleniti ut,
              ad minus omnis aut facere accusamus repellat exercitationem
              nesciunt asperiores. Expedita porro explicabo similique
              consectetur ut pariatur autem dicta, qui animi quasi delectus
              natus saepe asperiores at nobis voluptas laborum rerum dolorem
              dolorum ex repudiandae? Dolores tempore ab saepe officiis illum
              soluta ipsum dolore, praesentium distinctio, culpa dolorum
              recusandae a obcaecati dignissimos. Fuga illum dicta ducimus illo.
            </p>
          </div>
          <div className="singlepage_coomment">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
