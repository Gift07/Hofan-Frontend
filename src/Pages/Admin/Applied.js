import React from "react";
import Navbar from "../../components/Admin/Navbar";
import Table from "../../components/Table/Table";

const Applied = () => {
  return (
    <div className="w-full h-screen flex-1 bg-blue-100 overflow-y-auto ">
      <Navbar />
      <div className="w-full flex items-center justify-center mt-4">
        <div className="p-3 w-11/12 bg-white">
          <span className="text-lg font-bold text-gray-700">
            Applicants for the year 2022/2023
          </span>
          <div>
            <span className="my-2">
              <h1>Total Applied</h1>
              <h1 className="w-12 flex  items-center justify-center text-white  bg-green-600 rounded-md text-xl">
                305
              </h1>
            </span>
            <span className="my-2">
              <h1>Students with olevo certificate</h1>
              <h1 className="w-12 flex  items-center justify-center text-white  bg-blue-600 rounded-md text-xl">
                305
              </h1>
            </span>
            <span className="my-2">
              <h1>Students With Disability</h1>
              <h1 className="w-12 flex  items-center justify-center text-white  bg-red-600 rounded-md text-xl">
                305
              </h1>
            </span>
            <span>
              <button className="text-sm px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 duration-200 my-3 text-gray-50">
                Download pdf
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex items-center justify-center">
        <div className="w-11/12 px-2 bg-white mb-10">
          <div className="flex items-center justify-between">
            <span className="mt-3 mb-4">
              <input
                placeholder="Filter students"
                onChange={(event) => console.log(event.target.value)}
                className="p-2 my-3 bg-gray-300 text-gray-700 outline-none text-sm border-2 rounded-md border-gray-400 focus:border-blue-600"
              />
            </span>
            <button className="px-3 py-2 bg-blue-400 text-white hover:bg-blue-600 rounded-md">
              View full list
            </button>
          </div>
          <div className="pb-5 mb-5">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applied;
