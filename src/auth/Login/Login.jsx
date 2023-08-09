import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useBikeya } from "../../context/Context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const [disableButton, setDisableButton] = useState(false)

  const navigate = useNavigate();
  const firebase = useBikeya();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [firebase, navigate]);

  const handleChange = (e) => {
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!loginData.email || !loginData.password){
      setLoginError("Please Fill All the Fields")
      return;
    }
    setLoginError("")
    setDisableButton(true)
    await firebase
      .signinUser(loginData.email, loginData.password)
      .then((res) => {
        setDisableButton(false)
        console.log(res);
      })
      .catch((error) => {
        setDisableButton(false)
        setLoginError(error.message)
      });
  };
  return (
    <div className="background relative">
      <div className="bg-grad p-10">
        <img src={logo} alt="" className="w-28 " />

        <div className="w-2/6 bg-grad1 ml-auto h-auto rounded-lg  pt-8 pl-8 pr-8 absolute right-52 top-20  pb-10">
          <div className="flex justify-between">
            <span className="text-white text-lg ">
              Welcome to{" "}
              <span className="text-green-400 font-medium">Hunza Bikeya</span>
            </span>
            <div className="text-white flex flex-col text-sm">
              <span>No Account?</span>
              <Link to="/signup">
                <span className="text-green-400 ">Sign up</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl text-white">Sign in</h1>
          <button className="p-2 bg-gray-200 flex items-center mt-7 mx-auto gap-3 pl-14 pr-14 rounded-md text-blue-700 text-sm"
            onClick={firebase.signinWithGoogle}
          >
            <FcGoogle className="text-lg" />
            Sign in with Google
          </button>

          <form
            action=""
            className="flex flex-col gap-3 mt-8 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-white">
              <label htmlFor="email" className="text-sm">
                Enter your username and email address
              </label>
              <input
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Username or email address"
                className="p-2 rounded-md mt-3 text-black"
              />
            </div>
            <div className="flex flex-col text-white mt-3">
              <label htmlFor="password" className="text-sm">
                Enter your password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
                className="p-2 rounded-md mt-3 text-black"
              />
              <div className="flex justify-between items-center">
                <span className="text-red-500 text-sm mt-3">{loginError}</span>
                <span className="text-green-400 text-right mt-3 text-sm">
                  Forgort Password
                </span>
              </div>
              <button className="p-2 bg-green-600 w-40 ml-auto mt-8 rounded-md register-button" type="submit" disabled={disableButton}>
                sign in
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

export default Login;
