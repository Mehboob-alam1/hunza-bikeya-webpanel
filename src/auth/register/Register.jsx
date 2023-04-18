import React from "react";
import "./Register.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="background relative">
      <div className="bg-grad p-10">
        <img src="" alt="" className="w-28 " />

        <div className="w-2/6 bg-grad1 ml-auto h-auto rounded-lg  pt-8 pl-8 pr-8 absolute right-52 top-20  pb-10">
          <div className="flex justify-between">
            <span className="text-white text-lg ">
              Welcome to{" "}
              <span className="text-green-400 font-medium">Hunza Bikeya</span>
            </span>
            <div className="text-white flex flex-col text-sm">
              <span>No Account?</span>
              <Link to="/login">
                {" "}
                <span className="text-green-400 ">Sign in</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl text-white">Sign up</h1>
          <form className="flex flex-col gap-3 mt-5 ">
            <div className="flex flex-col text-white">
              <label htmlFor="email" className="text-sm">
                Enter your username and email address
              </label>
              <input
                type="text"
                name="email"
                placeholder="Username or email address"
                className="p-2 rounded-md mt-2"
              />
            </div>
            <div className="flex  text-white gap-5">
              <div className="w-auto flex flex-col">
                <label htmlFor="email" className="text-sm">
                  User name
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Username"
                  className="p-2 rounded-md mt-3 w-40 placeholder-text-sm"
                />
              </div>
              <div className="w-auto flex flex-col">
                <label htmlFor="email" className="text-sm">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Contact Number"
                  className="p-2 rounded-md mt-3 w-40"
                />
              </div>
            </div>
            <div className="flex flex-col text-white mt-3">
              <label htmlFor="password" className="text-sm">
                Enter your password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 rounded-md mt-3"
              />
              <span className="text-green-400 text-right mt-3 text-sm">
                Forgort Password
              </span>
             <button className="p-2 bg-green-600 w-40 ml-auto mt-8 rounded-md">
             <Link to="/dashboard">
                sign in
              </Link>
              </button>
            </div>
          </form>
        </div>

        <div className="flex absolute bottom-0 flex-col text-white gap-6 pb-4">
          <div className="flex   gap-5 justify-center">
            <AiOutlineTwitter /> <AiOutlineInstagram /> <FaPinterest />{" "}
            <FaFacebookF /> <FaGithub />
          </div>
          <span className="text-hairline text-sm">
            Copyright © 2023 hunza bikeya
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
