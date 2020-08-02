import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseAction from "../actions/courseActions";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path 'courses/:slug'
    if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
  }, [props.match.params.slug]);

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };

    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    // if there isn't a course.title, then we are going to set errors title to ...
    if (!course.title) _errors.title = "Title is required";
    if (!course.title) _errors.authorId = "Author ID is required";
    if (!course.title) _errors.category = "Category is required";

    setErrors(_errors);

    // Form is valid if the errors object has no properties.

    return Object.keys(_errors).length === 0;
  }

  function handleSumbit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    courseAction.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast("Course Added");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSumbit}
      />
    </>
  );
};

export default ManageCoursePage;
