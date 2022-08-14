import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Admin/Card";
import Navbar from "../../components/Admin/Navbar";
import {
  FetchCourseCertificate,
  FetchCoursesDiploma,
} from "../../features/courses/actions";

const DiplomaAdmin = () => {
  const dispatch = useDispatch();
  const { diplomaLoading, courseDiploma } = useSelector(
    (state) => state.Diploma
  );

  useEffect(() => {
    dispatch(FetchCoursesDiploma());
  }, [dispatch]);
  return (
    <div className="w-full h-screen flex-1 bg-blue-100 overflow-y-auto ">
      <Navbar />
      {/* short summary */}
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="w-11/12 bg-white p-3">
          <div>
            <span>
              <h1 className="text-gray-700 text-lg font-bold">
                Available Diploma Courses
              </h1>
              <h1>Total</h1>
              <h1>8</h1>
            </span>
          </div>
          <div>
            <button className="px-4 py-2 text-sm bg-blue-400 hover:bg-blue-500 active:bg-blue-700 rounded-md text-white my-4">
              Add new Course
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <span className="w-full items-center  px-10 mt-4">
            <h1 className="font-semibold text-gray-700">Courses</h1>
          </span>
          <div className="my-4 w-11/12 flex items-center justify-center mt-4">
            <div className="py-3">
              <div className="container m-auto  text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
                  {courseDiploma.map((item) => (
                    <Card key={item.id} course={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaAdmin;
