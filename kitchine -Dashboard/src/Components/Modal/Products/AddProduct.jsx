import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseFormRequest from "../../../Hooks/UseFormRequest";
import UseRequest from "../../../Hooks/UseRequest";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import TextArea from "../../Shares/TextArea";
import AlertToster from "../../Shares/Toastify/AlertToster";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";

export default function AddProduct({ onClick = () => {} }) {
  const { register, handleSubmit, reset } = useForm();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const req = UseRequest();
  const reqF = UseFormRequest();

  useEffect(() => {
    req({ uri: "category", method: "GET" }).then((res) =>
      setCategory(res.data)
    );
  }, []);
  // on Submit
  const onSubmit = (data) => {
    try {
      if (images.length !== 0) {
        let formData = new FormData();
        for (let i = 0; i < images.length; i++) {
          console.log(i)
          formData.append("img", images[i]);
        }
       console.log(formData.get("img"))
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("brand", data.brand);
        formData.append("price", data.price);
        formData.append("buy", data.buy);
        formData.append("category", data.category);
        formData.append("qty", data.qty);

        // reqF({
        //   uri: "category",
        //   method: "POST",
        //   data: formData,
        // }).then((res) => {
        //   if (res.newInstance) {
        //     AlertToster("Add Category!", "success");
        //     reset();
        //     setImages([]);
        //     onClick();
        //   } else {
        //     AlertToster("Something went wrong", "error");
        //   }
        // });
      }
    } catch (error) {}
  };
  //
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
              <UploadImgs imgs={images} setImgs={setImages} multiple={true} />
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
                label={"Price"}
                type="number"
                register={{ ...register("price", { required: true }) }}
              />
              <Input
                label={"Buy Price"}
                type="number"
                register={{ ...register("buy", { required: true }) }}
              />
              <Input
                label={"Quantity"}
                type="number"
                register={{ ...register("qty", { required: true }) }}
              />
              <Dropdown
                options={category}
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
