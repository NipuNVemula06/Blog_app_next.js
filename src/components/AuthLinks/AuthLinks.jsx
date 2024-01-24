"use client";
import React, { useState } from "react";
import "./AuthLinks.css";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "authenticated";
  return (
    <div className="authlink">
      {status === "notauthenticated" ? (
        <Link href="/login" className="authlink_login">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="authlink_write">
            Write
          </Link>
          <span className="authlink_logout">Logout</span>
        </>
      )}
      <div className="authlink_burger" onClick={() => setOpen(!open)}>
        {open ? <RiCloseFill /> : <RiMenu3Fill />}
      </div>

      {/* show the menu when icon is clicked */}
      {open && (
        <div className="responsive_menu">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="authlink_logout">Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
