import React from "react";
import { useForm } from "react-hook-form";
import { logo2 } from "../../Assets/Index";
import Btn from "../../Components/Shares/Btn";
import Input from "../../Components/Shares/Input";
import UserCtx from "../../Context/UserCtx";
import UseRequest from "../../Hooks/UseRequest";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const {user:[user,setUser]}=UserCtx();

  const req = UseRequest();
  const login = (data) => {
    req({ uri: "login", method: "POST", data: data }).then(res=>setUser(res.loginProfile))
    ;
  };
  console.log(user)
  return (
    <section className="h-screen">
      <div className="container px-6 h-full ">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={logo2} className=" h-[70vh]" alt="Sample image" />
          </div>
          <div
            className="bg-primary bg-opacity-10 rounded-md shadow-md p-5 xl:ml-20 xl:w-5/12 lg:w-6/12 
          md:w-8/12 mb-12 md:mb-0"
          >
            <form onSubmit={handleSubmit(login)}>
              <div className="mb-6">
                <Input
                  label={"Email address"}
                  register={{ ...register("email") }}
                />
              </div>

              <div className="mb-6">
                <Input
                  label={"Password"}
                  type="password"
                  register={{ ...register("password") }}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-txt checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <Btn cStyle={"px-14"} child={"LOGIN"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
