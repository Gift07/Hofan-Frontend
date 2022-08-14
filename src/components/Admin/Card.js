import React from "react";

const Card = ({ course }) => {
  console.log(course);
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-4 sm:px-12 lg:px-8">
      <div className="mb-2 space-y-4">
        <h3 className="text-2xl font-semibold text-purple-900">
          {course.course_title}
        </h3>
        <h1 className="block font-medium text-purple-600">
          years:{course.course_years}
        </h1>
      </div>
    </div>
  );
};

export default Card;
