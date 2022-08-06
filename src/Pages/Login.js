import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { SignInAction } from "../features/auth/action";
import { TailSpin } from "react-loader-spinner";

import Navbar from "../components/Navbar";
import { AiOutlineCopyright } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { access, authLoading, authError } = useSelector((state) => state.Auth);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignInAction(formData));
  };

  if (access) return <Navigate to="/" />;

  return (
    <div className="w-full font-poppins bg-blue-100">
      <Navbar />
      <div className="pt-20 px-20">
        <div className="mt-16">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Login
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              Login to continue with your application
            </h1>
          </span>
        </div>
        <div className="mt-8">
          <form>
            <div className="my-8">
              <label className="mr-14">Enter Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-8">
              <label className="mr-5">Enter Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <span className="my-3">
              <h1 className="pb-3">Forgot your password?</h1>
              <Link to="/user/sign-up">
                <h1 className="pb-3">You dont have an account? Register</h1>
              </Link>
            </span>
            <div>
              {authLoading ? (
                <button className="px-6 py-2 flex items-center gap-x-3 bg-blue-600 text-600 duration-200 hover:bg-blue-700 text-white">
                  <TailSpin color="#FFF" height={17} width={17} />
                  <h1>Loading...</h1>
                </button>
              ) : (
                <button
                  onClick={(event) => handleSubmit(event)}
                  className="px-6 py-2 bg-blue-600 text-600 duration-200 hover:bg-blue-700 text-white"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="w-full px-20 py-3 pt-14 flex items-center justify-center gap-x-24">
          <div className="flex items-center gap-x-4">
            <img src={Logo} alt="logo" className="w-14 h-14 object-cover" />
            <span className="uppercase text-blue-700 font-semibold">
              <h1>Hofan Training</h1>
              <h1>Institute</h1>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <AiOutlineCopyright />
            <h1>2020 All rights reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
