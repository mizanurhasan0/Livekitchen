import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logo2 } from "../../Assets/Index";
import UserCtx from "../../Context/UserCtx";
import UseRequest from "../../Hooks/UseRequest";
import Btn from "../Shares/Btn";
import Input from "../Shares/Input";
import TextArea from "../Shares/TextArea";
import AlertToster from "../Shares/Toastify/AlertToster";

export default function Register() {
  // Declieration
  const { register, handleSubmit } = useForm();
  const { user, setUser, setUserUpdate } = UserCtx();
  const req = UseRequest();
  const navigate = useNavigate();

  const onRegister = (data) => {
    // req({ uri: "login", method: "POST", data: data }).then((res) => {
    //   if (res.status === 200) {
    //     setUserUpdate((v) => (v === false ? true : false));
    //     setUser(res.loginProfile);
    //     AlertToster("Success", "success");
    //     navigate("/dashboard");
    //   } else {
    //     AlertToster("Something went wrong", "error");
    //   }
    // });
  };

  return (
    <>
      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
        New User Form
      </h4>

      <form onSubmit={handleSubmit(onRegister)} >
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
          <Input
            label={"Password"}
            type="password"
            register={{ ...register("password") }}
          />
        </div>
        <div className="mb-4">
          <TextArea
            label={"Current Address"}
            register={{ ...register("address") }}
          />
        </div>
        <div className=" pt-1 mb-12 pb-1 flex justify-between items-center">
          <Btn cStyle={"px-14"} child={"Register"} type="submit" />
        </div>
      </form>
    </>
  );
}
