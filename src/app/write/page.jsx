"use client";

import React, { useState } from "react";
import "./WritePage.css";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { IoImagesOutline, IoVideocamOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="write">
      <div className="write_topsection">
        <input
          type="text"
          placeholder="Title"
          className="write_input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="write_select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="style">Style</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="culture">Culture</option>
          <option value="travel">Travel</option>
          <option value="coding">Coding</option>
        </select>
      </div>

      <div className="write_editor">
        <button className="write_plusbutton" onClick={() => setOpen(!open)}>
          <IoMdAdd className="write_plusicon" />
        </button>
        {open && (
          <div className="write_add">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="write_imageinput"
            />
            <button className="write_addbutton">
              <label htmlFor="image">
                <IoImagesOutline id="image" className="write_addicon" />
              </label>
            </button>
            <button className="write_addbutton">
              <RiExternalLinkLine className="write_addicon" />
            </button>
            <button className="write_addbutton">
              <IoVideocamOutline className="write_addicon" />
            </button>
          </div>
        )}
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <button className="write_publishbutton">Publish</button>
      </div>

      {/* <div className="write_editor">
        <button className="write_plusbutton" onClick={() => setOpen(!open)}>
          <IoMdAdd className="write_plusicon" />
        </button>
        v>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="write_textarea"
        />

        <button className="write_publishbutton">Publish</button>
      </div> */}
    </div>
  );
};

export default WritePage;
