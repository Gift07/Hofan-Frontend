import React from "react";
import Kenny from "../assets/cover-1.jpeg";
import { BsCreditCard } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className="w-screen bg-blue-100">
      <div className="pt-2 px-20">
        <div className="mt-8">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Welcome !
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5 flex items-center gap-x-3">
              <h1 className="text-gray-500 text-lg">
                <BsCreditCard />
              </h1>
              Application window for 2022/2023 is now open
            </h1>
          </span>
        </div>
        <div className="mt-8 pb-10  flex  items-center justify-center">
          <div className="grid grid-cols-2 w-full items-center justify-center gap-x-4">
            <div className="w-full h-full">
              <img
                src={Kenny}
                alt="kenny"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-full bg-white rounded-lg shadow-xl">
              <div className="h-10 w-full bg-blue-600 rounded-t-lg flex items-center font-semibold">
                <h1 className="uppercase px-4 text-white">
                  General Information
                </h1>
              </div>
              <div className="px-4 py-4">
                <p className="text-sm text-gray-800">
                  Elit incididunt proident ipsum tempor id dolor sunt. Voluptate
                  et do do nisi ut nulla adipisicing proident nostrud duis amet
                  adipisicing i ncididunt cupidatat. Esse labore duis dolore
                  aute eu.
                </p>
              </div>
              <div className="px-4">
                <p className="text-sm text-gray-700">
                  Nulla id anim eu ut quis amet occaecat minim commodo aliquip
                  eiusmod. Cillum incididunt veniam voluptate dolor exercitation
                  enim nisi sint. Mollit proident laboris ex aute labore laboris
                  nulla labore pariatur Lorem ullamco cupidatat non et. Enim
                  cupidatat ea tempor et sit sint sunt esse cillum anim.
                  Voluptate eu sint eu est esse pariatur labore duis.
                </p>
              </div>
              <div className="py-3 px-4 w-full flex flex-col items-center justify-center">
                <button className="w-full py-2 rounded-md  my-2 flex items-center justify-center text-white bg-blue-500">
                  Click Here to Apply now
                </button>
                <button className="w-full py-2 rounded-md my-2 flex items-center justify-center text-white bg-orange-500">
                  Click Here to Check Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
