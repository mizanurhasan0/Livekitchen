import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logo2 } from "../../Assets/Index";
import UserCtx from "../../Context/UserCtx";
import UseRequest from "../../Hooks/UseRequest";
import Btn from "../Shares/Btn";
import Input from "../Shares/Input";
import AlertToster from "../Shares/Toastify/AlertToster";
import Register from "./Register";

export default function Login() {
  // Declieration
  const { register, handleSubmit } = useForm();
  const { user, setUser, setUserUpdate } = UserCtx();
  const req = UseRequest();
  const navigate = useNavigate();
  const location = useLocation();
  const [reg, setReg] = useState(false);
  // Function
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user, navigate]);

  const login = (data) => {
    req({ uri: "adminlogin", method: "POST", data: data }).then((res) => {
      if (res?.status === 200) {
        if(res?.loginProfile?.isAdmin[0]?.toLowerCase()==="admin"){
          AlertToster("Success", "success");
          setUserUpdate((v) => (v === false ? true : false));
          setUser(res?.loginProfile);
          navigate("/dashboard");
        }else{
          AlertToster("Access denied!", "warning");
        }
       
      } else {
        AlertToster("Something went wrong", "error");
      }
    });
  };

  return (
    <section className="h-full gradient-form bg-gray-200 xl:h-screen pb-10">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto w-48" src={logo2} alt="logo" />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are committed
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit(login)}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <Input
                          label={"Email address"}
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
                      <div className=" pt-1 mb-12 pb-1 flex justify-between items-center">
                        <Btn cStyle={"px-14"} child={"LOGIN"} type="submit" />

                        <NavLink className="text-gray-500" to="#!">
                          Forgot password?
                        </NavLink>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <label
                         onClick={()=>setReg(!reg)}
                          className="text-primary font-bold uppercase"
                        >{!reg?"Register":"Back to Login"}
                          
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-primary">
                  {reg ? (
                      <div className="text-white w-full px-4 py-6 md:p-12 md:mx-6">
                    <Register />
                    </div>
                  ) : (
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        We are committed to provide premium products to our
                        customers at their door within a short time. All
                        Products Are Imported From China. The most reliable
                        source of quality products at reasonable prices
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
