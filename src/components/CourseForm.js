import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        // changing the name will affect what we get from our computed property
        value={props.course.title}
        errors={props.errors.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        label="Author"
        errors={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        errors={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
