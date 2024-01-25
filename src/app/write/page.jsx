"use client";

import React, { useEffect, useState } from "react";
import "./WritePage.css";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { IoImagesOutline, IoVideocamOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [buttonstatus, setButtonStatus] = useState(true);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const upload = () => {
      const storage = getStorage(app);
      const name = file.name + new Date().getTime();
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className="write_loading">loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: category || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

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
              accept="image/*"
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
        <button className="write_publishbutton" onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
