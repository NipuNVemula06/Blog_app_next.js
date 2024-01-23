import React from "react";
import "./Menu.css";
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <h5 className="menu_subtitle">What's hot</h5>
        <h3 className="menu_title">Most Popular</h3>
        <MenuPosts withImage={false} />
      </div>
      <div>
        <h5 className="menu_subtitle">Discover by topic</h5>
        <h3 className="menu_title">Categories</h3>
        <MenuCategories />
      </div>
      <div>
        <h5 className="menu_subtitle">Choosen by the editor</h5>
        <h3 className="menu_title">Editor's Pick</h3>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
