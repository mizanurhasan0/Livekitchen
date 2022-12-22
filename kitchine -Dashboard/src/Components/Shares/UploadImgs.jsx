import React from 'react'
import { uploadImg } from '../../Assets/Index'

export default function UploadImgs() {
  return (
    <>
    <label
      htmlFor="formFileLg"
      className="cursor-pointer
        mb-2 
       border-4 border-dotted flex flex-col p-2 items-center
       "
    >
      <img src={uploadImg} alt="upload"/>
      Upload images
    </label>
    <input
      multiple 
      className="hidden "
      id="formFileLg"
      type="file"
      onChange={(e)=>console.log(e.target.files)}
    />
  </>
  )
}
