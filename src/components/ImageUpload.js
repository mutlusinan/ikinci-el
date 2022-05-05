import React, { useState } from "react";
import closeButton from "../img/closeButton.png";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div>
        {selectedImage && (
          <div className="uploadedImage">
            <span onClick={() => setSelectedImage(null)}>
              <img src={closeButton} className="removeBtn" alt="remove" />
            </span>
            <img
              className="uploadedImage"
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
          </div>
        )}
        
        {!selectedImage && (
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        )}
      </div>
      {/* <div className="dropZone"></div> */}
    </>
  );
};

export default ImageUpload;
