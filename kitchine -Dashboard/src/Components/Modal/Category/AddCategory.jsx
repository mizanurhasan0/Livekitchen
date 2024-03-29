import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseFormRequest from "../../../Hooks/UseFormRequest";
import UseRequest from "../../../Hooks/UseRequest";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import { ActiveOption } from "../../Shares/StaticData";
import AlertToster from "../../Shares/Toastify/AlertToster";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";

//
export default function AddCategory({ onClick = () => {}, itemId = 0 }) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState(false);
  // request hook
  const req = UseRequest();
  const reqF = UseFormRequest();

  useEffect(() => {
    if (itemId != 0)
      req({ uri: `category/${itemId}`, method: "GET" }).then((res) => {
        setCategory(res.newInstance);
        setValue("isActive", res.newInstance.isActive);
      });
  }, []);
  // on Submit
  const onSubmit = (data) => {
    try {
      if (images.length !== 0) {
        let formData = new FormData();
        formData.append("img", images[0]);
        formData.append("name", data.name);
        formData.append("isActive", data.isActive);
        // Request
        reqF({
          uri: "category",
          method: "POST",
          data: formData,
        }).then((res) => {
          if (res.newInstance) {
            AlertToster("Add Category!", "success");
            reset();
            setImages([]);
            onClick();
          } else {
            AlertToster("Something went wrong", "error");
          }
        });
      }else{
        // 
        let formData = new FormData();
        if(images.length===0){
          formData.append("name", data.name);
          formData.append("isActive", data.isActive);
        }else{
          formData.append("img", images[0]);
          formData.append("name", data.name);
          formData.append("isActive", data.isActive);
        }
      
        // Request
        reqF({
          uri: "category",
          method: "POST",
          data: formData,
        }).then((res) => {
          if (res.newInstance) {
            AlertToster("Add Category!", "success");
            reset();
            setImages([]);
            onClick();
          } else {
            AlertToster("Something went wrong", "error");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
    <div className="modal ">
      {/* image upload */}

      <div className="flex flex-col justify-center bg-txt p-10 rounded-md">
        <div className=" border border-primary py-4 mb-10 text-primary text-2xl text-center rounded-md uppercase">
          Add Category
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6">
            {/* images */}
            <div>
              <UploadImgs
                imgs={images}
                setImgs={setImages}
                multiple={false}
                itemImg={category.images}
              />
            </div>
            {/*  */}
            <div className="w-full grid grid-cols-1  gap-5">
              <Input
                label={"Category Name"}
                value={category?.name}
                register={{ ...register("name") }}
              />

              <Dropdown
                options={ActiveOption}
                register={{ ...register("isActive", { required: true }) }}
              />
            </div>

            <div className="mt-5 flex justify-between  space-x-10">
              <Btn
                cStyle={"w-full text-primary bg-txt"}
                child={"close"}
                onClick={onClick}
              />
              <Btn cStyle={"w-full "} child={itemId===0?"Save":"Update"} type={"submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
