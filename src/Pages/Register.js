import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo.png";
import { AiOutlineCopyright } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import { SignUpAction } from "../features/auth/action";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    sur_name: "",
    email: "",
    gender: "",
    phone_number: "",
    password: "",
    re_password: "",
  });
  const { access, authLoading } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignUpAction(formData));
  };

  if (localStorage.getItem("sign-up"))
    return <Navigate to="/complete-registlation" />;
  if (access) return <Navigate to="/" />;
  return (
    <div className="w-full font-poppins">
      <Navbar />
      <div className="pt-20 px-20">
        <div className="mt-16">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Register
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              Register to start with your application
            </h1>
          </span>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="grid grid-cols-3 items-center justify-center"
          >
            <div className="my-3 flex flex-col">
              <label className="mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2">Firstname</label>
              <input
                placeholder="Firstname"
                name="first_name"
                value={formData.first_name}
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2 ">Middlename</label>
              <input
                placeholder="Middlename"
                name="middle_name"
                value={formData.middle_name}
                required
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-8">
              <label className="mr-14">Lastname</label>
              <input
                placeholder="Lastname"
                name="sur_name"
                value={formData.sur_name}
                required
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2">Gender</label>
              <select
                placeholder="Gender"
                name="gender"
                required
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2">Phone</label>
              <input
                placeholder="Phone"
                value={formData.phone_number}
                name="phone_number"
                onChange={(event) => handleChange(event)}
                type="tel"
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2">Password</label>
              <input
                placeholder="Password"
                type="password"
                value={formData.password}
                name="password"
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="mb-2">Confirm Password</label>
              <input
                placeholder="Confirm Password"
                value={formData.re_password}
                name="re_password"
                onChange={(event) => handleChange(event)}
                type="password"
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div />
            <div>
              {authLoading ? (
                <button className="flex items-center gap-x-2 px-6 py-2 bg-blue-600 text-white">
                  <TailSpin width={20} height={20} color="#fff" />
                  Loading....
                </button>
              ) : (
                <button
                  type="submit"
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

export default Register;
