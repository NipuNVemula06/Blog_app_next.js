"use client";

import React, { useContext } from "react";
import "./ThemeToggle.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className="themetoggle"
      style={
        theme === "dark"
          ? {
              background: "white",
            }
          : {
              background: "#0f172a",
            }
      }
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className="themetoggle_ball"
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sub" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
