import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { UpdateProfile } from "../features/profile/actions";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { regions } from "../components/regions";

const Profile = () => {
  const [formData, setFormData] = useState({
    date_of_birth: "",
    place_of_birth: "Mtwara",
    form_four_number: "",
    place_of_olevo_completion: "",
  });
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getRegions() {
  //     const { data } = await axios.get("http://127.0.0.1:5000");

  //     setData(data.regions);
  //   }
  //   getRegions();
  // }, []);

  const [has_olevo, setHas_olevo] = useState(false);

  const { profileLoading, profile } = useSelector((state) => state.Profile);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const Qualifications = ["olevo", "no oleve certificate"];

  const olevoRef = useRef();

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      UpdateProfile({ axiosPrivate, formData, username: profile.email })
    );
  };
  return (
    <div className="w-screen font-poppins bg-blue-100">
      <Navbar />
      <div className="pt-20 px-20">
        <div className="mt-16">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Enter Basic Info
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              Enter Basic info to continue with your application
            </h1>
          </span>
        </div>
        <div className="mt-8">
          <form>
            <div className="my-8">
              <label className="mr-14">Enter Date of Birth</label>
              <input
                placeholder="Date of birth"
                type="date"
                name="date_of_birth"
                value={formData.date_of_birthl}
                onChange={(event) => handleChange(event)}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              />
            </div>
            <div className="my-8">
              <label className="mr-14">Entry Qualifications</label>
              <select
                onChange={(event) => {
                  if (event.target.value === "olevo") {
                    setHas_olevo(true);
                  } else {
                    setHas_olevo(false);
                  }
                }}
                className="h-10 w-72 p-2 border border-blue-700 outline-none"
              >
                <option>Select Entry Qualifications</option>
                {Qualifications.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {has_olevo && (
              <div>
                <div className="my-8">
                  <label className="mr-14">
                    Enter Region of olevo completion
                  </label>
                  <select
                    placeholder="Region"
                    name="place_of_olevo_completion"
                    value={formData.place_of_olevo_completion}
                    onChange={(event) => handleChange(event)}
                    className="h-10 w-72 p-2 border border-blue-700 outline-none"
                  >
                    <option>Select your Region</option>
                    {regions.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="my-8">
                  <label className="mr-14">Enter form Four Numberl</label>
                  <input
                    placeholder="s3470/0040/2015"
                    name="form_four_number"
                    value={formData.form_four_number}
                    onChange={(event) => handleChange(event)}
                    className="h-10 w-72 p-2 border border-blue-700 outline-none"
                  />
                </div>
              </div>
            )}
            <div>
              {profileLoading ? (
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
      </div>
    </div>
  );
};

export default Profile;
