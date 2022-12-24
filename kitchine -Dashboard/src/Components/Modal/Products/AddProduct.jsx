import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import TextArea from "../../Shares/TextArea";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";

export default function AddProduct({ onClick = () => {} }) {
  const { register, handleSubmit } = useForm();
  const [images,setImages]=useState([])


  // on Submit
  const onSubmit = (data) => console.log(data);
  return (
    <div className="modal ">
      {/* image upload */}

      <div className="flex flex-col justify-center bg-txt p-10 rounded-md">
        <div className=" bg-primary py-4 mb-10 text-txt text-2xl text-center rounded-md uppercase">
          Add product
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6">
            {/* images */}
            <div>
              <UploadImgs imgs={images} setImgs={setImages}/>
            </div>
            {/*  */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                label={"Product Title"}
                register={{ ...register("name") }}
              />
              <Input
                label={"Brand"}
                register={{ ...register("brand", { required: true }) }}
              />
              <Input
                label={"Price"} type="number"
                register={{ ...register("price", { required: true }) }}
              />
              <Input
                label={"Buy Price"}  type="number"
                register={{ ...register("buy", { required: true }) }}
              />
              <Input
                label={"Quantity"}  type="number"
                register={{ ...register("qty", { required: true }) }}
              />
              <Dropdown
                register={{ ...register("category", { required: true }) }}
              />
            </div>
            <TextArea
              cStyle={"mt-5"}
              register={{ ...register("description", { required: true }) }}
              label="Product Description"
            />

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
