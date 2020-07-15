import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as CourseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };

    setCourse(updatedCourse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    CourseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast("Course Added");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSumbit}
      />
    </>
  );
};

export default ManageCoursePage;
