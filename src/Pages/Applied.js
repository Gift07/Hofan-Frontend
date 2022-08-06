import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import { signOutAction } from "../features/auth/action";

const Applied = () => {
  const { first_name, sur_name } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  return (
    <div className="w-full font-poppins bg-blue-100">
      <Navbar />
      <div className="pt-20 px-20">
        <div className="mt-16">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Application Status
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              Thank you for applying you will be notified soon
            </h1>
          </span>
        </div>
        <div>
          <button
            onClick={() => dispatch(signOutAction())}
            className="px-5 py-2 bg-red-600 text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applied;
