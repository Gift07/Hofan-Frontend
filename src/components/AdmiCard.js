import React from "react";

const AdmiCard = ({ number, title }) => {
  return (
    <div className="px-10 py-3 bg-white">
      <span>
        <h1 className="font-medium text-sm py-2">{title}</h1>
        <h1 className="text-gray-500 text-xs">+5.27% Since last month</h1>
      </span>
      <span className="mt-2">
        <h1 className="text-xl  font-semibold">{number}</h1>
      </span>
      <span className="my-2">
        <button className="px-4 py-1 bg-blue-500 text-white text-sm">
          View
        </button>
      </span>
    </div>
  );
};

export default AdmiCard;
