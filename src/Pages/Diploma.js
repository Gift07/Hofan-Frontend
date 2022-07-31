import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCoursesDiploma } from "../features/courses/actions";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Navbar from "../components/Navbar";

const Diploma = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { diplomaLoading, courseDiploma, diplomaError } = useSelector(
    (state) => state.Diploma
  );

  useEffect(() => {
    dispatch(FetchCoursesDiploma({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  return (
    <div className="font-poppins bg-blue-100 min-h-screen">
      <Navbar />
      <div className="pt-16 px-20">
        <div className="mt-16">
          <h1 className="text-[#002080] text-2xl uppercase font-semibold">
            Certificate Courses
          </h1>
        </div>
        <div className="my-3">
          <span className="flex items-center bg-blue-200">
            <hr className="w-2 h-10 border border-blue-600 bg-blue-600" />
            <h1 className="text-gray-900 ml-5">
              List of available certificate courses
            </h1>
          </span>
        </div>
        <div className="bg-white shadow rounded-lg w-full p-3">
          <span className="w-full flex items-center justify-between">
            <h1 className="uppercase font-semibold">Available Courses</h1>
            <button className="text-white bg-blue-600 px-4 py-2">
              Apply Now
            </button>
          </span>
          <div className="flex">
            <span className="grid grid-cols-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diploma;
