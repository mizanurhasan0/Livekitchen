import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseFormRequest from "../../../Hooks/UseFormRequest";
import UseRequest from "../../../Hooks/UseRequest";
import Loading from "../../Loading/Loading";
import Loading2 from "../../Loading/Loading2";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import { Origin } from "../../Shares/StaticData";
import TextArea from "../../Shares/TextArea";
import AlertToster from "../../Shares/Toastify/AlertToster";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";


export default function AddProduct({ onClick = () => {}, itemId = 0 }) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(false);

  //
  const req = UseRequest();
  const reqF = UseFormRequest();

  // Category load
  useEffect(() => {
    setLoading(true);
    req({ uri: "category", method: "GET" })
      .then((res) => setCategory(res.data))
      .finally(() => setLoading(false));
  }, []);

  // Edit Data load
  useEffect(() => {
    if (itemId !== 0) {
      setLoading(true);
      req({ uri: `products/${itemId}`, method: "GET" })
        .then((res) => {
          setProduct(res.newInstance);
          setValue("name", res.newInstance.name);
          setValue("brand", res.newInstance.brand);
          setValue("price", res.newInstance.price);
          setValue("discount", res.newInstance.discount);
          setValue("buy", res.newInstance.buy);
          setValue("origin", res.newInstance.origin);
          setValue("qty", res.newInstance.qty);
          setValue("description", res.newInstance.description);
          setValue("category", res.newInstance.category);
        })
        .finally(() => setLoading(false));
    }
  }, []);
  // on Submit
  const onSubmit = (data) => {
    setLoading(true);
    try {
      if (images.length !== 0) {
        let formData = new FormData();

        Object.values(images).forEach((file) => {
          formData.append("img", file);
        });

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("brand", data.brand);
        formData.append("price", data.price);
        formData.append("discount", data.discount);
        formData.append("origin", data.origin);
        formData.append("buy", data.buy);
        formData.append("category", data.category);
        formData.append("qty", data.qty);

        reqF({
          uri: "products",
          method: "POST",
          data: formData,
        })
          .then((res) => {
            if (res.newInstance) {
              AlertToster("Add Product!", "success");
              reset();
              setImages([]);
              onClick();
            } else {
              AlertToster("Something went wrong", "error");
            }
          })
          .finally(() => setLoading(false));
      }
    } catch (error) {
      setLoading(false);
    }
  };
  //
  return (
    <div className="modal ">
      {/* Loading Modal */}
      {loading ? <Loading2 /> : ""}
      {/* image upload */}

      <div className="flex flex-col justify-center bg-txt p-10 rounded-md">
        <div className=" bg-primary py-4 mb-10 text-txt text-2xl text-center rounded-md uppercase">
          Add product
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6">
            {/* images */}
            <div>
              <UploadImgs
                imgs={images}
                setImgs={setImages}
                multiple={true}
                itemImg={product.images}
              />
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
                label={"Current price"}
                type="number"
                register={{ ...register("price", { required: true }) }}
              />
               <Input
                label={"Old price"}
                type="number"
                register={{ ...register("discount", { required: true }) }}
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
                options={Origin}
                register={{ ...register("origin", { required: true }) }}
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
