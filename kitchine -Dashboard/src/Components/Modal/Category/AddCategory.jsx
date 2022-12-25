import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import { ActiveOption } from "../../Shares/StaticData";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";


// 
export default function AddCategory({ onClick = () => {} }) {
  const { register, handleSubmit,reset } = useForm();
  const [images, setImages] = useState([]);

  // on Submit
  const onSubmit = (data) => {
    console.log(data);
    reset()
  };
  //
  return (
    <div className="modal ">
      {/* image upload */}

      <div className="flex flex-col justify-center bg-txt p-10 rounded-md">
        <div className=" bg-primary py-4 mb-10 text-txt text-2xl text-center rounded-md uppercase">
          Add Category
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6">
            {/* images */}
            <div>
              <UploadImgs imgs={images} setImgs={setImages} multiple={false} />
            </div>
            {/*  */}
            <div className="w-full grid grid-cols-1  gap-5">
              <Input
                label={"Category Name"}
                register={{ ...register("name") }}
              />

              <Dropdown options={ActiveOption}
                register={{ ...register("category", { required: true }) }}
              />
            </div>

            <div className="mt-5 flex justify-between  space-x-10">
              <Btn
                cStyle={"w-full text-primary bg-txt"}
                child={"close"}
                onClick={onClick}
              />
              <Btn cStyle={"w-full "} child={"Save"} type={"submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
