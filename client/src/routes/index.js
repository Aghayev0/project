import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../pages/admin/Layouts/DashboardLayout";
import PublicRoutesLayout from "../pages/admin/Layouts/PublicRoutesLayout";
import AddLaptop from "../pages/admin/pages/addLaptop";
import AddPhone from "../pages/admin/pages/addPhone";
import Dashboard from "../pages/admin/pages/Dashboard";
import Login from "../pages/admin/pages/Login";
import Page404 from "../pages/admin/pages/Page404";
import Products from "../pages/admin/pages/Products";
import Register from "../pages/admin/pages/Register";
import Sales from "../pages/admin/pages/Sales";
import Settings from "../pages/admin/pages/Settings";
import SingleProduct from "../pages/admin/pages/SingleProduct";
import Users from "../pages/admin/pages/Users";
import Category from "../pages/category";
import Chrome from "../pages/chromebook";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Laptop from "../pages/laptop";
import Login1 from "../pages/login";
import Pro from "../pages/pro";
import Registration from "../pages/register";
import Root from "../pages/root";
import Vivo from "../pages/vivobook";
import Zenbook from "../pages/zenbook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mobile",
        element: <Category />,
      },
      {
        path: "/zenbook",
        element: <Zenbook />,
      },
      {
        path: "/vivobook",
        element: <Vivo />,
      },
      {
        path: "/chromebook",
        element: <Chrome />,
      },
      {
        path: "/proart",
        element: <Pro />,
      },
      {
        path: "/laptops",
        element: <Laptop />,
      },
      {
        path: "/details/:_id",
        element: <Detail />,
      },
      {
        path: "/user/register",
        element: <Registration />,
      },
      {
        path: "/user/login",
        element: <Login1 />,
      },
    ],
  },
  {
    path: "/panel",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "sales", element: <Sales /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <SingleProduct /> },
      { path: "AddLaptop", element: <AddLaptop /> },
      { path: "users", element: <Users /> },
      { path: "AddPhone", element: <AddPhone /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/admin",
    element: <PublicRoutesLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "page404", element: <Page404 /> },
    ],
  },
  { path: "*", element: <Navigate to="/page404" replace={true} /> }
]);
