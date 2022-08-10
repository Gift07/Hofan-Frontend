import React from "react";
import { Link } from "react-router-dom";
import User from "../../assets/th.jpeg";

const Navbar = () => {
  return (
    <div className="w-full pl-10 pr-2 pt-3">
      <span className="w-full flex items-center justify-between">
        <span className="flex items-center gap-x-4">
          <h1 className="font-semibold text-gray-600 text-xl">
            Welcome To Dashboard
          </h1>
          <span className="flex items-center gap-x-2">
            <h1 className="px-3 py-1 text-xs bg-white text-blue-600 font-semibold">
              <Link to="/">Home</Link>
            </h1>
            <h1 className="px-3 py-1 text-xs bg-white text-blue-600 font-semibold">
              Activities
            </h1>
            <h1 className="px-3 py-1 text-xs bg-white text-blue-600 font-semibold">
              Today
            </h1>
          </span>
        </span>
        <span className="flex items-center gap-x-3">
          <img
            src={User}
            alt="user"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span>
            <h1 className="text-sm">Gift Lushingula</h1>
            <h1 className="text-xs">giftedwards9@gmail.com</h1>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
