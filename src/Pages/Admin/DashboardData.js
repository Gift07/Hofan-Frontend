import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import AdmiCard from "../../components/AdmiCard";
import Navbar from "../../components/Admin/Navbar";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {
  AppliedStudentsAction,
  ApprovedStudentsAction,
} from "../../features/myapplication/action";

const DashboardData = () => {
  const { applied } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  console.log(applied);

  useEffect(() => {
    dispatch(AppliedStudentsAction({ axiosPrivate }));
    dispatch(ApprovedStudentsAction({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  return (
    <div className="w-full h-screen flex-1 bg-blue-100 overflow-y-auto ">
      <Navbar />
      {/* top items */}
      <div className="w-full flex items-center justify-center px-10 pt-5">
        <div className="grid grid-cols-4 items-center justify-center gap-x-6">
          <AdmiCard title={"Selected students"} number={6} />
          <AdmiCard title={"Applicants"} number={100} />
          <AdmiCard title={"Diploma"} number={8} />
          <AdmiCard title={"Certificate"} number={7} />
        </div>
      </div>
      {/* applicants */}
      <div className="w-full flex items-center justify-center mt-8 mb-10">
        <div className="w-11/12  bg-white p-2">
          <span className="w-full px-1 flex items-center justify-between py-4">
            <span>
              <input
                placeholder="Filter Students"
                className="outline-none bg-gray-200 p-3 text-gray-700 text-sm"
              />
            </span>
            <span>
              <button className="px-1 py-2 bg-blue-500 text-white">
                Download Pdf
              </button>
            </span>
          </span>
          <span className="px-2">
            <h1 className="ml-1 uppercase text-gray-600 text-sm font-semibold">
              New applicants
            </h1>
          </span>
          {/* table */}
          <span className="pb-5 mb-5">
            <Table />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
