import React from "react";
import "./PreviewImage.css";
import Image from "next/image";

const PreviewImage = ({ previewImage, setPreviewImage }) => {
  return (
    <div className="previewimage_container">
      <Image src={previewImage} alt="" fill className="preview_image" />
      <div className="previewimage_cancel">
        <button onClick={() => setPreviewImage(null)} className="cancel_button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PreviewImage;
