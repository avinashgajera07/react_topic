import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import MainRoutes from "./mainroutes";
import CustomStore from "./CustomStore.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Provider store={CustomStore}>
    <RouterProvider router={MainRoutes} />
  </Provider>
  </>
);