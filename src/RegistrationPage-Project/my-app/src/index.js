import React from "react";
import ReactDOM from "react-dom/client";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { RouterProvider} from "react-router-dom";
import MainRoutes from "./MainRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={MainRoutes} />
    {/* <MainRoutes></MainRoutes>  */}
    {/* <Headerfile/> */}
    {/* <HeaderCompo />
    <ComponentExample /> */}
  </>
);
