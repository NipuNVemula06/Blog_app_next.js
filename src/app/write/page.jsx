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
import PreviewImage from "@/components/PreviewImage/PreviewImage";
import LoadingBar from "react-top-loading-bar";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="write_loading">loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFile(file);

    if (file) {
      setOpen(false);
      const blobUrl = URL.createObjectURL(file);
      setPreviewImage(blobUrl);
    } else {
      setPreviewImage(null);
    }
  };

  // to convert title into url friendly format(slug)
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const storage = getStorage(app);
    const name = file.name + new Date().getTime();
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
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
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              desc: value,
              img: downloadURL,
              slug: slugify(title),
              catSlug: category || "style",
            }),
          }).then(async (response) => {
            if (response.status === 200) {
              const data = await response.json();
              router.push(`/posts/${data.slug}`);
            }
          });
        });
      }
    );
  };

  return (
    <div className="write">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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
        <button
          disabled={previewImage}
          className="write_plusbutton"
          onClick={() => setOpen(!open)}
        >
          <IoMdAdd className="write_plusicon" />
        </button>
        {open && (
          <div className="write_add">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="write_imageinput"
            />
            <button className="write_addbutton">
              <label htmlFor="image" title="image">
                <IoImagesOutline id="image" className="write_addicon" />
              </label>
            </button>
            <button className="write_addbutton" title="external-link">
              <RiExternalLinkLine className="write_addicon" />
            </button>
            <button className="write_addbutton" title="video">
              <IoVideocamOutline className="write_addicon" />
            </button>
          </div>
        )}
        {previewImage && (
          <PreviewImage
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
          />
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
