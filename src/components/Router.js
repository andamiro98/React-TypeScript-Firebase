import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "../routes/Home";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Profile from "../routes/Profile";

const Router = ({isLoggedIn}) => {
  return(
  <BrowserRouter>
    <Routes>
      {isLoggedIn ? (
      <Route  path="/" element={<Home/>}/>
      ) : (
      <Route path="/" element={<Auth/>}/> 
      )}
      


      
    </Routes>
  </BrowserRouter>
  )
}

export default Router;