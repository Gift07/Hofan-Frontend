import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { FetchProfile } from "../features/profile/actions";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Info from "../components/Info";
import {
  FetchCourseCertificate,
  FetchCoursesDiploma,
} from "../features/courses/actions";
import { FetchResults } from "../features/results/action";
import { TailSpin } from "react-loader-spinner";
import Profile from "./Profile";

const Status = () => {
  const [educationLevel, setEducationLevel] = useState("");
  const [year, setYear] = useState(0);
  const [body, setBody] = useState({
    year: "",
    exam_type: "csee",
    school_number: "",
    students_number: "",
  });

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { profile, profileLoading, profileError } = useSelector(
    (state) => state.Profile
  );
  const { certificateLoading, certificate, certificateError } = useSelector(
    (state) => state.Certificate
  );
  const { diplomaLoading, diploma, diplomaError } = useSelector(
    (state) => state.Diploma
  );
  const {
    first_name,
    middle_name,
    sur_name,
    email,
    gender,
    phone_number,
    status,
    place_of_birth,
    date_of_birth,
    form_four_number,
  } = profile;

  const Education = ["Certificate", "Diploma"];

  const Qualifications = ["olevo"];
  const handleChange = (event) => {
    setBody({ ...body, [event.target.name]: event.target.value });
  };

  const bodyData = {
    year: "2015",
    exam_type: "csee",
    school_number: "s3470",
    student_number: "0040",
  };
  useEffect(() => {
    dispatch(FetchProfile({ axiosPrivate }));
    dispatch(FetchCourseCertificate({ axiosPrivate }));
    dispatch(FetchCoursesDiploma({ axiosPrivate }));
    dispatch(FetchResults({ bodyData, axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  return (
    <div className="w-screen relative min-h-screen font-poppins bg-blue-100">
      {status === "Init" ? (
        <Profile />
      ) : (
        <React.Fragment>
          {profileLoading ? (
            <Loading />
          ) : profileError ? (
            <div>{profileError}</div>
          ) : (
            <div className="absolute top-0 w-full bg-blue-100">
              <Navbar />
              <div className="pt-16 px-20 w-full mb-10">
                <div className="mt-4 w-full">
                  <h1 className="text-[#002080] text-xl uppercase font-semibold">{` ${first_name} ${middle_name}  ${sur_name}`}</h1>
                  <div className="my-3 w-full ">
                    <span className="w-full  flex items-center bg-orange-200">
                      <hr className="w-2 h-10 border border-orange-600 bg-orange-600" />
                      <h1 className="text-gray-900 ml-5">
                        Welcome back Please complete your application
                      </h1>
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-lg shadow px-4 py-2">
                    <span>
                      <h1 className="uppercase font-semibold">
                        Your information
                      </h1>
                    </span>
                    <div className="flex w-full my-5">
                      <div className="grid grid-cols-4 w-full gap-y-3 ">
                        <Info title="FirstName" value={first_name} />
                        <Info title="MiddleName" value={middle_name} />
                        <Info title="SurName" value={sur_name} />
                        <Info title="Gender" value={gender} />
                        <Info title="Email" value={email} />
                        <Info title="Phone" value={phone_number} />
                        <Info title="Place of Birth" value={place_of_birth} />
                        <Info
                          title="Form four Number"
                          value={form_four_number}
                        />
                        <Info title="Date of Birth" value={date_of_birth} />
                        <Info title="Gender" value={gender} />
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white">
                      Edit information
                    </button>
                    <div className="mt-5">
                      <div>
                        <h1 className="uppercase font-semibold">
                          Your application
                        </h1>
                      </div>
                      <div className="my-4 flex items-center">
                        <span className="gap-x-4">
                          <label className="mr-4">Education Level</label>
                          <select
                            onChange={(event) =>
                              setEducationLevel(event.target.value)
                            }
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Select The Education Level</option>
                            {Education.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        <span className="gap-x-4">
                          <label className="mr-4">Education Level</label>
                          <select
                            onChange={(event) =>
                              setEducationLevel(event.target.value)
                            }
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Select The Entry Qualifications</option>
                            {Qualifications.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        <div>
                          <label>Csee seat Count</label>
                          <input
                            defaultValue={1}
                            type="number"
                            className="p-2 h-10 border border-blue-600 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Entry qualifications
                    <div className="mt-5 pr-16 w-full flex flex-col gap-x-5">
                      <div className="p-3 bg-orange-100 rounded-lg text-sm">
                        Index Number Format! All applicant who have attended
                        NECTA (Tanzania) Form Four examination, their Index
                        Number should be put on this Format (SXXXX/XXXX or
                        PXXXX/XXXX or BXXXX/XXXX) and all equivalent applicant
                        their index number should be put on this Format
                        (EQYYYYXXXXXX)
                      </div>
                      <div className="flex items-center w-full  justify-between">
                        <div className="my-2 flex flex-col">
                          <label className="">Enter School Number</label>
                          <input
                            placeholder="School Number"
                            maxLength={5}
                            name="school_number"
                            value={body.school_number}
                            onChange={(event) => handleChange(event)}
                            className="h-10 w-72 p-2 border border-blue-700 outline-none"
                          />
                        </div>
                        <div className="my-2 flex flex-col">
                          <label className="">Enter Student Number</label>
                          <input
                            placeholder="Students Number"
                            name="students_number"
                            maxLength={4}
                            minLength="4"
                            value={body.students_number}
                            onChange={(event) => handleChange(event)}
                            className="h-10 w-72 p-2 border border-blue-700 outline-none"
                          />
                        </div>
                        <div className="my-2 flex flex-col">
                          <label className="">
                            Enter yearof olevo completion
                          </label>
                          <input
                            placeholder="Year of 0levo completion"
                            name="year"
                            type="year"
                            value={body.year}
                            maxLength="4"
                            minLength="4"
                            onChange={(event) => handleChange(event)}
                            className="h-10 w-72 p-2 border border-blue-700 outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <h1>Results</h1>
                      </div>
                    </div> */}
                    {/* applicannt residental area */}
                    <div className="my-4 ">
                      <span className="uppercase font-semibold">
                        <h1>Your Residence</h1>
                      </span>
                      <div className="my-4 flex items-center">
                        <span className="gap-x-4">
                          <label className="mr-4">Education Level</label>
                          <select
                            onChange={(event) =>
                              setEducationLevel(event.target.value)
                            }
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Select The Education Level</option>
                            {Education.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        <span className="gap-x-4">
                          <label className="mr-4">Education Level</label>
                          <select
                            onChange={(event) =>
                              setEducationLevel(event.target.value)
                            }
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Select The Entry Qualifications</option>
                            {Qualifications.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        <div>
                          <label>Csee seat Count</label>
                          <input
                            defaultValue={1}
                            type="number"
                            className="p-2 h-10 border border-blue-600 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end px-10">
                      <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 my-3 text-white">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Status;
