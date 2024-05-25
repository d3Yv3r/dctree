import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "@/pages/Home";
import AccountLinks from "@/pages/AccountLinks";
import Dashboard from "@/pages/Admin/Dashboard";
import Ui from "@/pages/Admin/Ui";
import { CreateLink } from "@/pages/Admin/CreateLink";
import Login from "@/pages/Login";
import PreviewContext from "@/context/PreviewContext";
import Register from "./pages/Register";

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:accountlink" element={<AccountLinks />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin">
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="create-link" element={<CreateLink />}></Route>
        <Route
          path="ui"
          element={
            <PreviewContext>
              <Ui />
            </PreviewContext>
          }
        ></Route>
        {/* <Route path="config" element={<Config />}></Route> */}
      </Route>
    </>
  )
);
