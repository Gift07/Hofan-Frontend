import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import { LoadUser } from "./features/auth/action";
import { useDispatch, useSelector } from "react-redux";

import About from "./Pages/About";
import Certificate from "./Pages/Certificate";
import Diploma from "./Pages/Diploma";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Status from "./Pages/Status";
import Thankyou from "./Pages/Thankyou";
import Verify from "./Pages/Verify";
import Dashboard from "./Pages/Dashboard";
import Applied from "./Pages/Admin/Applied";
import DashboardData from "./Pages/Admin/DashboardData";
import Approved from "./Pages/Admin/Approved";
import CertificateAdmin from "./Pages/Admin/Certificate";
import DiplomaAdmin from "./Pages/Admin/Diploma";

function App() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { admin } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(LoadUser({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/sign-in" element={<Login />} />
        <Route path="user/sign-up" element={<Register />} />
        <Route path="user-profile" element={<Status />} />
        <Route path="application-results" element={<About />} />
        <Route path="diploma" element={<Diploma />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="complete-registlation" element={<Thankyou />} />
        <Route path="activate/:uid/:token" element={<Verify />} />
        <Route
          path="admin"
          element={admin ? <Dashboard /> : <Navigate to="/" />}
        >
          <Route path="admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<DashboardData />} />
          <Route path="applied-students" element={<Applied />} />
          <Route path="approved-students" element={<Approved />} />
          <Route path="certificate" element={<CertificateAdmin />} />
          <Route path="diploma" element={<DiplomaAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
