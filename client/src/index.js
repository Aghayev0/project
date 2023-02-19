import ReactDOM from "react-dom/client";
import { router } from "./routes";
import './pages/admin/pages/admin.scss'
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'boxicons/css/boxicons.min.css'
import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
