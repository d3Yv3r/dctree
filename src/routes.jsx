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
// import Config from '@/Admin/Config'

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:accountlink" element={<AccountLinks />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin">
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="create-link" element={<CreateLink />}></Route>
        <Route path="ui" element={<Ui />}></Route>
        {/* <Route path="config" element={<Config />}></Route> */}
      </Route>
    </>
  )
);