import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    description: "",
  };

  const registerSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Title too short")
      .max(20, "Title too long")
      .required("Title is required"),
    description: Yup.string()
      .min(3, "Description too short")
      .max(80, "Description too long")
      .required("Description is required"),
  });

  const submit = (values) => {
    const valuesFinal = {
      id: 1,
      title: values.title,
      description: values.description,
      completed: false,
    };

    dispatch(addTodo(valuesFinal));
  };

  return (
    <div className="form">
      <h4> Write your "To Do"... </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-inputs">
            <Field
              id="title"
              name="title"
              placeholder="Title... "
              type="text"
              className="field-1"
            />

            {/* Title Errors */}

            {errors.title && touched.title && (
              <ErrorMessage name="title" component="div" />
            )}

            <Field
              id="description"
              name="description"
              placeholder="Description... "
              type="text"
              className="field-2"
            />

            {/* Description Errors */}

            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div" />
            )}

            <button type="submit" className="btn btn-success">
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
