import React from "react";
import "./Navbar.css";
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_socials">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="navbar_logo">NipunBlog.</div>
      <div className="navbar_links">
        <ThemeToggle />
        <Link className="navbar_link" href="/">
          Home
        </Link>
        <Link className="navbar_link" href="/">
          Contact
        </Link>
        <Link className="navbar_link" href="/">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
