import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect } from "react";
import useAxiosPrivate from "./hooks/useAxiosPrivate"
import { LoadUser } from "./features/auth/action";
import { useDispatch } from "react-redux";

import About from "./Pages/About";
import Certificate from "./Pages/Certificate";
import Diploma from "./Pages/Diploma";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Status from "./Pages/Status";

function App() {
  const dispatch = useDispatch()
  const axiosPrivate = useAxiosPrivate()

  useEffect(()=>{
    dispatch(LoadUser({axiosPrivate}))
  },[dispatch, axiosPrivate])
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user/sign-in" element={<Login/>} />
      <Route path="user/sign-up" element={<Register/>}/>
      <Route path="application-me" element={<Status/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="diploma" element={<Diploma/>}/>
      <Route path="certificate" element={<Certificate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
