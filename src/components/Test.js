import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Formats d'image acceptés : <br />
        .jpg, .jpeg, .bmp, .png, .gif, .psd, .tif, .eps und .pdf
      </h1>
      {selectedImage && (
        <div className="Upload-button">
          <img
            alt="not found"
            width={"600px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        id="upload-photo"
        style={{ color: "wheat" }}
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
