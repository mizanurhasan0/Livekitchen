import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserCtx from "../../Context/UserCtx";
import UseRequest from "../../Hooks/UseRequest";
import Btn from "../Shares/Btn";
import Input from "../Shares/Input";
import TextArea from "../Shares/TextArea";
import AlertToster from "../Shares/Toastify/AlertToster";

export default function Register() {
  // Declieration
  const { register, handleSubmit } = useForm();
  const {  setUser, setUserUpdate } = UserCtx();
  const req = UseRequest();
  const navigate = useNavigate();

  const onRegister = (data) => {
    req({ uri: "user", method: "POST", data: data }).then((res) => {
      if (res.newUser) {
        setUserUpdate((v) => (v === false ? true : false));
        setUser(res.newUser);
        AlertToster("Success", "success");
        navigate("/");
      } else {
        AlertToster("Something went wrong", "error");
      }
    });
  };

  return (
    <>
      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">New User Form</h4>

      <form onSubmit={handleSubmit(onRegister)}>
        <p className="mb-4">Please Register to your account</p>
        <div className="mb-4">
          <Input label={"Your Name"} register={{ ...register("name") }} />
        </div>
        <div className="mb-4">
          <Input
            label={"Email address"}
            type="text"
            register={{ ...register("email") }}
          />
        </div>
        <div className="mb-4">
          <Input
            label={"Password"}
            type="password"
            register={{ ...register("password") }}
          />
        </div>
        <div className="mb-4">
          <Input label={"Contact Number"} register={{ ...register("phone") }} />
        </div>
       
        <div className="mb-4">
          <TextArea
            label={"Current Address"}
            register={{ ...register("address") }}
          />
        </div>
        <div className=" pt-1 mb-12 pb-1 flex justify-between items-center">
          <Btn className={"px-14"} child={"Register"} type="submit" />
        </div>
      </form>
    </>
  );
}
