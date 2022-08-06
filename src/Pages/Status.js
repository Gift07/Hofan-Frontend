import React, { useEffect, useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { AppliedState, FetchProfile } from "../features/profile/actions";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Info from "../components/Info";
import {
  FetchCourseCertificate,
  FetchCoursesDiploma,
} from "../features/courses/actions";
import { FetchResults } from "../features/results/action";
import Profile from "./Profile";
import { regions, disabiledStatus } from "../components/regions";
import { ApplyCourseAction } from "../features/myapplication/action";
import Applied from "./Applied";

const Status = () => {
  const [educationLevel, setEducationLevel] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [errorItem, setError] = useState("");
  const [disability, setDisability] = useState("");
  const [region, setRegion] = useState("");
  const [has_olevo_certificate, setHasolevo] = useState(true);

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { profile, profileLoading, profileError } = useSelector(
    (state) => state.Profile
  );
  const { school_name, division, point, results } = useSelector(
    (state) => state.Results
  );
  const { courseCertificate } = useSelector((state) => state.Certificate);
  const { courseDiploma } = useSelector((state) => state.Diploma);
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

  const findResults = useCallback(
    (value) => {
      if (typeof value !== "undefined") {
        const dataItem = value.split("/");
        setHasolevo(true);

        const bodyInit = {
          year: dataItem[2],
          exam_type: "csee",
          school_number: dataItem[0],
          student_number: dataItem[1],
        };
        return bodyInit;
      } else {
        setError("You did not provide a form four number ");
        setHasolevo(false);
        return errorItem;
      }
    },
    [errorItem]
  );

  const bodyData = useMemo(
    () => findResults(form_four_number),
    [findResults, form_four_number]
  );

  const handleClick = () => {
    const formData = {
      disability,
      region_of_residence: region,
      selected_course: selectedCourse,
      education: educationLevel,
      has_olevo_certificate: has_olevo_certificate,
      form_four_Number: form_four_number,
      division,
      point,
      results: {
        Mathematics: results.Mathematics,
        Biology: results.Biology,
        Geography: results.Geography,
        English: results.English,
        Kiswahili: results.Kiswahili,
        History: results.History,
        Civics: results.Civics,
      },
    };
    const username = profile.email;
    // dispatch(ApplyCourseAction({ formData, axiosPrivate }));
    dispatch(AppliedState({ axiosPrivate, username }));
  };
  useEffect(() => {
    dispatch(FetchProfile({ axiosPrivate }));
    dispatch(FetchCourseCertificate({ axiosPrivate }));
    dispatch(FetchCoursesDiploma({ axiosPrivate }));
    dispatch(FetchResults({ bodyData, axiosPrivate }));
  }, [dispatch, axiosPrivate, bodyData]);

  return (
    <div className="w-screen relative min-h-screen font-poppins bg-blue-100">
      {status === "Init" ? (
        <Profile />
      ) : status === "Pending" ? (
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
                    {/* your results */}
                    <div className="mt-5">
                      <span>
                        <h1 className="uppercase font-semibold">
                          Your Results
                        </h1>
                      </span>
                      <span className="flex items-center gap-x-2">
                        <h1>School: </h1>
                        <h1 className="font-semibold">{school_name}</h1>
                      </span>
                      <span className="flex items-center gap-x-2">
                        <h1>Division: </h1>
                        <h1 className="font-semibold">{division}</h1>
                      </span>
                      <span className="flex items-center gap-x-2">
                        <h1>Point: </h1>
                        <h1 className="font-semibold">{point}</h1>
                      </span>
                      <div className="bg-blue-200 px-5 py-2 my-3  rounded-md">
                        <div>
                          <span className="flex items-center">
                            <h1>Mathematics : </h1>
                            <h1>{results.Mathematics}</h1>
                          </span>
                          <span className="flex items-center">
                            <h1>Civics : </h1>
                            <h1>{results.Civics}</h1>
                          </span>
                          <span className="flex items-center">
                            <h1>History : </h1>
                            <h1>{results.History}</h1>
                          </span>
                          <span className="flex items-center">
                            <h1>English : </h1>
                            <h1>{results.English}</h1>
                          </span>
                        </div>
                        <span className="flex items-center">
                          <h1>Kiswahili : </h1>
                          <h1>{results.Kiswahili}</h1>
                        </span>
                        <span className="flex items-center">
                          <h1>Geography : </h1>
                          <h1>{results.Geography}</h1>
                        </span>
                        <span className="flex items-center">
                          <h1>Biology : </h1>
                          <h1>{results.Biology}</h1>
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 w-full items-center justify-between">
                      <div>
                        <h1 className="uppercase font-semibold">
                          Your application
                        </h1>
                      </div>
                      <div className="my-4 flex items-center w-full gap-x-16">
                        <span className="gap-x-4">
                          <label className="mr-4">Education Level</label>
                          <select
                            required={true}
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
                        {educationLevel === "Certificate" ? (
                          <span className="gap-x-4">
                            <label className="mr-4">Select course</label>
                            <select
                              onChange={(event) =>
                                setSelectedCourse(event.target.value)
                              }
                              className="p-2 h-10 border border-blue-600 outline-none"
                            >
                              <option>Select The Entry Qualifications</option>
                              {courseCertificate.map((item, index) => (
                                <option key={item.id} value={item.course_title}>
                                  {item.course_title}
                                </option>
                              ))}
                            </select>
                          </span>
                        ) : educationLevel === "Diploma" ? (
                          <span className="gap-x-4">
                            <label className="mr-4">The course You apply</label>
                            <select
                              onChange={(event) =>
                                setSelectedCourse(event.target.value)
                              }
                              className="p-2 h-10 border border-blue-600 outline-none"
                            >
                              <option>Select The Entry Qualifications</option>
                              {courseDiploma.map((item) => (
                                <option key={item.id} value={item.course_title}>
                                  {item.course_title}
                                </option>
                              ))}
                            </select>
                          </span>
                        ) : (
                          <div />
                        )}
                        <div />
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
                      <div className="my-4 flex items-center ">
                        <span className="gap-x-4">
                          <label className="mr-4">Region</label>
                          <select
                            required={true}
                            onChange={(event) => setRegion(event.target.value)}
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Select Area of Residence</option>
                            {regions.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        <span className="gap-x-4">
                          <label className="mr-4">Diasability</label>
                          <select
                            required={true}
                            onChange={(event) =>
                              setDisability(event.target.value)
                            }
                            className="p-2 h-10 border border-blue-600 outline-none"
                          >
                            <option>Any disability</option>
                            {disabiledStatus.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </span>
                        {/* <div>
                          <label>Csee seat Count</label>
                          <input
                            defaultValue={1}
                            type="number"
                            className="p-2 h-10 border border-blue-600 outline-none"
                          />
                        </div> */}
                      </div>
                    </div>
                    <div className="flex items-center justify-end px-10">
                      <button
                        onClick={handleClick}
                        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 my-3 text-white"
                      >
                        Submit Your Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </React.Fragment>
      ) : (
        <Applied />
      )}
    </div>
  );
};

export default Status;
