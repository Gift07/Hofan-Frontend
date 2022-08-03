import React from "react";
import { TailSpin } from "react-loader-spinner";

const Thankyou = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span className="text-center flex flex-col items-center justify-center">
        <h1 className="font-semibold uppercase my-3">Hofan Training center</h1>
        <p className="mb-4">
          Thank you for taking this step in registering to our institute, <br />
          Please visit your email account to verify your registration
        </p>
        <TailSpin width={35} height={35} color="dodgerblue" />
      </span>
    </div>
  );
};

export default Thankyou;
