import React from "react";
import "./register.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import registerImg from "../../images/registrationimage1.png";
import registerIcon1 from "../../images/login_icon_01.svg";
import registerIcon2 from "../../images/login_icon_02.svg";
import registerIcon3 from "../../images/login_icon_03.svg";
import registerIcon4 from "../../images/login_icon_04.svg";
import registerIcon5 from "../../images/login_icon_05.svg";
import registerIcon6 from "../../images/login_icon_06.svg";
import { useFormik } from "formik";
import { registerUser } from '../../apicalls/users';
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/loaderSlice/index'
const Registration = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        dispatch(ShowLoading())
        const response = await registerUser(values)
        dispatch(HideLoading())
        if (response.success) {
          message.success(response.message)
        } else {
          message.error(response.message)
        }
      } catch (error) {
        dispatch(HideLoading())
        message.error(error.message)
      }
      formik.resetForm()
    },
  });
  return (
    <div className='reg'>
      <div className='reg__box'>
        <div className='reg__box__left'>
          <div className='reg__box__left__1'>
            <img alt='' src={registerImg} />
          </div>
          <div className='reg__box__left__2'>
            <h1>One Account, All ASUS</h1>
            <p>
              Sign in your ASUS account and get everything you need form one
              portal!
            </p>
          </div>
          <div className='reg__box__left__'>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon1} />
              <p>Manage the warranties of your ASUS products</p>
            </div>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon2} />
              <p>Download drivers and software for your products</p>
            </div>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon3} />
              <p>Get technical support and keep track of your repair status</p>
            </div>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon4} />
              <p>Quick checkout and easy order tracking</p>
            </div>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon5} />
              <p>Get exclusive offers and discounts</p>
            </div>
            <div className='reg__box__left__3'>
              <img alt='' src={registerIcon6} />
              <p>Stay up to date with the latest news and events</p>
            </div>
          </div>
        </div>
        <div className='reg__box__right'>
          <h1>Account Register</h1>
          <div className='reg__box__right__form'>
            <form onSubmit={formik.handleSubmit}>
              <label className='label' htmlFor='name'>
                Name
              </label>
              <input
                className='input'
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='error'>{formik.errors.name}</div>
              ) : null}

              <label className='label' htmlFor='email'>
                Email Address
              </label>
              <input
                className='input'
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='error'>{formik.errors.email}</div>
              ) : null}
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input
                className='input'
                id='password'
                name='password'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='error'>{formik.errors.password}</div>
              ) : null}

              <button type='submit' className='submitBtn'>
                Submit
              </button>
            </form>
          </div>
          <div className='singupnow'>
            <h5>Your Already Have Account ?</h5>
            <Link to='/user/login'>Login Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
