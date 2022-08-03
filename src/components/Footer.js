import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full pb-4 bg-[#002080]">
      <div className="flex justify-between pt-10 px-32">
        <div>
          <h1 className="text-xl font-semibold text-white">
            {"News & Events"}
          </h1>
          <ul className="text-gray-300 my-3">
            <li>Students</li>
            <li>Academics</li>
            <li>Foundations</li>
            <li>Church</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">
            {"Information For"}
          </h1>
          <ul className="text-gray-300 my-3">
            <li>Students</li>
            <li>Parents</li>
            <li>Guidance Counselloer</li>
            <li>Alumni</li>
            <li>Events</li>
            <li>Donors</li>
            <li>Media</li>
            <li>Employers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">{"Services"}</h1>
          <ul className="text-gray-300 my-3">
            <li>Bookstore</li>
            <li>Library</li>
            <li>Conference Services</li>
            <li>Off Campus</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">{"Contacts"}</h1>
          <ul className="text-gray-300 my-3">
            <li>777 Garner Street</li>
            <li>Dar es Salaam, Tanzania</li>
            <li>Our News letter</li>
            <li>Request Information</li>
          </ul>
        </div>
      </div>
      <div className="px-32 flex items-center gap-x-8 pb-4 text-white text-sm italic pt-24">
        <span className="flex items-center gap-x-3">
          <AiOutlineCopyright />
          <h1>2022 Hofan Training Institute</h1>
        </span>
        <h1>{"Privacy & Terms of Use"}</h1>
      </div>
    </div>
  );
};

export default Footer;
