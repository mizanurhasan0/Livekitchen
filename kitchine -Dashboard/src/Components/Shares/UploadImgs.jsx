import React from "react";
import { uploadImg } from "../../Assets/Index";
import CheckSize from "../../Utils/CheckSIze";
import AlertToster from "./Toastify/AlertToster";

export default function UploadImgs({ imgs, setImgs,multiple }) {
  const handleFileChange = (event) => {
    const fileSize = event.target.files.length;
    if (fileSize > 0 && fileSize < 5) {
      let arr = [];
      for (let i = 0; i < fileSize; i++) {
        if (CheckSize(event.target.files[i])) {
          arr.push(event.target.files[i]);
        } else {
          setImgs([]);
          AlertToster("It breaks image uploaded roles!", "error");
          break;
        }
      }
      setImgs(arr);
    }
  };

  return (
    <>
      <label
        htmlFor="formFileLg"
        className="cursor-pointer mb-2 border-4 border-dotted flex flex-row justify-center p-2 items-center  "
      >
        {imgs.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={uploadImg} alt="upload" className="w-16 "/>
            <span className="text-xl uppercase ">Upload images</span>
          </div>
        ) : (
          imgs.map((img, i) => {
            return (
              <div key={i}>
                <img
                  src={URL.createObjectURL(img)}
                  alt="upload"
                  className="w-16 h-16"
                />
              </div>
            );
          })
        )}
      </label>
      <input multiple={multiple}
        
        className="hidden "
        id="formFileLg"
        accept=".png, .jpg, .jpeg"
        type="file"
        onChange={handleFileChange}
      />
    </>
  );
}
