import React from "react";

const GlassHover = () => {
  return (
    <div className="w-screen h-screen z-[1000] relative">
      <div className="w-full h-full absolute bg-black opacity-10  z-[1100] " />
      <div className="z-[2000] absolute">Hello world</div>
    </div>
  );
};

export default GlassHover;
