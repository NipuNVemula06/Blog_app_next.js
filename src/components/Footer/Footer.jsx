import React from "react";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <div className="footer_logo">
          <h1 className="footer_logotext">NipunBlog.</h1>
        </div>
        <p className="footer_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          tenetur saepe dignissimos pariatur doloremque repudiandae iste
          officiis nisi voluptas quam!
        </p>
        <div className="footer_icons">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className="footer_links">
        <div className="footer_list">
          <span className="footer_listtitle">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="footer_list">
          <span className="footer_listtitle">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="footer_list">
          <span className="footer_listtitle">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
