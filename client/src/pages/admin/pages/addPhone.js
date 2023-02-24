import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./admin.scss";
import axios from "axios";
const AddPhone = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      title: "",
      releasedate: "",
      cpu: "",
      display: "",
      camera: "",
      battery: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      image: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      releasedate: Yup.string()
        .max(150, "Must be 15 characters or less")
        .required("Required"),
      cpu: Yup.string()
        .max(50, "Must be 15 characters or less")
        .required("Required"),
      display: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      camera: Yup.string()
        .max(50, "Must be 15 characters or less")
        .required("Required"),
      battery: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post(`http://localhost:5522/api/mobiles/post`, values)
        .then(() => alert("Added successfully"));
      formik.resetForm();
    },
  });
  return (
    <>
      <div className='page__main'>
        <h1>Add Laptop</h1>
        <div>
          <form className='addp' onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='name'
              name='name'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <label htmlFor='price'>price</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='price'
              name='price'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />

            <label htmlFor='image'>image</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='image'
              name='image'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />

            <label htmlFor='title'>title</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='title'
              name='title'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />

            <label htmlFor='releasedate'>Release Date</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='releasedate'
              name='releasedate'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.releasedate}
            />

            <label htmlFor='cpu'>CPU</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='cpu'
              name='cpu'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpu}
            />
            <label htmlFor='camera'>camera</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='camera'
              name='camera'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.camera}
            />
            <label htmlFor='battery'>battery</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='battery'
              name='battery'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.battery}
            />
            <label htmlFor='display'>Display</label>
            <input
              style={
                formik.touched.name && formik.errors.name
                  ? { border: "1px solid red" }
                  : { border: "1px solid black" }
              }
              id='display'
              name='display'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.display}
            />

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPhone;
