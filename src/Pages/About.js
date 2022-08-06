import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <Navbar />
      <div className="pt-20 px-20">
        <div className="mt-10">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Selection Results
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              Students Who are selected For The year 2022/2023
            </h1>
          </span>
        </div>
        <div className="bg-white rounded-md shadow px-4 py-3">
          <span>
            <h1 className="uppercase font-semibold">Selected Students</h1>
          </span>
          <span className="w-full flex items-center justify-center">
            <h1>Selection results are not out yet</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
