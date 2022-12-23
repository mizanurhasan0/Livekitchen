import React from "react";
import Btn from "../../Shares/Btn";
import Dropdown from "../../Shares/Dropdown";
import Input from "../../Shares/Input";
import TextArea from "../../Shares/TextArea";
import UploadImgs from "../../Shares/UploadImgs";
import "../styleModal.css";

export default function AddProduct({onClick=()=>{}}) {
  return (
    <div className="modal ">
      {/* image upload */}

      <div className="flex flex-col justify-center bg-txt p-10 rounded-md">
        <div className=" bg-primary py-4 mb-10 text-txt text-2xl text-center rounded-md uppercase">
          Add product
        </div>
        
        <form className="w-full">
          <div className="flex flex-col mb-6">
            {/* images */}
           <div>
            <UploadImgs/>
           </div>
            {/*  */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
             <Input label={"Product Title"}/>
             <Input label={"Brand"}/>
             <Input label={"Price"}/>
             <Input label={"Buy Price"}/>
             <Input label={"Quantity"}/>
             <Dropdown/>
            </div>
            <TextArea cStyle={"mt-5"} label="Product Description"/>

           <div className="mt-5 flex justify-between  space-x-10">
           <Btn cStyle={"w-full text-primary bg-txt"} child={"close"}  onClick={onClick}/>
           <Btn cStyle={"w-full "} child={"Save"}/>
           </div>
            </div>
        </form>
      </div>
    </div>
  );
}
