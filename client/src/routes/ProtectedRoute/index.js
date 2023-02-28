import { message } from "antd";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/usersSlice/usersSlice";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice/loaderSlice";
const ProtectedRoute = ( ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getUserInfo();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
        if (response.data.name=="EminAdmin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        message.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, []);
  return 
};

export default ProtectedRoute;
