import React from "react";
import { useLocation } from "react-router-dom";
import { uploadImg } from "../../Assets/Index";
import CheckSize from "../../Utils/CheckSIze";
import AlertToster from "./Toastify/AlertToster";

export default function UploadImgs({ imgs, setImgs, multiple, itemImg = [] }) {
  const path = useLocation().pathname.replace("/dashboard/", "");
  // Uploaded File changed
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
            <div className="flex ">
              {itemImg.map((img, i) => {
                return (
                  <img
                    crossOrigin="anonymous"
                    src={process.env.REACT_APP_URL_IMG + `/${path}/` + img}
                    alt="upload"
                    className="w-16 "
                  />
                );
              })}
            </div>
            {itemImg.length === 0 && (
              <>
                <img
                  crossOrigin="anonymous"
                  src={uploadImg}
                  alt="upload"
                  className="w-16 "
                />
                <span className="text-xl uppercase ">Upload images</span>
              </>
            )}
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
      <input
        multiple={multiple}
        className="hidden "
        id="formFileLg"
        accept=".png, .jpg, .jpeg"
        type="file"
        onChange={handleFileChange}
      />
    </>
  );
}
