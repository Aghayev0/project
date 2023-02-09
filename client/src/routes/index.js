import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../pages/admin/Layouts/DashboardLayout";
import PublicRoutesLayout from "../pages/admin/Layouts/PublicRoutesLayout";
import Dashboard from "../pages/admin/pages/Dashboard";
import Deliveries from "../pages/admin/pages/Deliveries";
import Login from "../pages/admin/pages/Login";
import Messages from "../pages/admin/pages/Messages";
import Page404 from "../pages/admin/pages/Page404";
import Products from "../pages/admin/pages/Products";
import Register from "../pages/admin/pages/Register";
import Sales from "../pages/admin/pages/Sales";
import Settings from "../pages/admin/pages/Settings";
import SingleProduct from "../pages/admin/pages/SingleProduct";
import Users from "../pages/admin/pages/Users";
import Home from "../pages/home";
import Root from "../pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
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
      { path: "messages", element: <Messages /> },
      { path: "users", element: <Users /> },
      { path: "deliveries", element: <Deliveries /> },
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
