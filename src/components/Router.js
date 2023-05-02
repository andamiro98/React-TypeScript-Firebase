import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import Auth from '../routes/Auth';
import EditProfile from '../routes/EditProfile';
import Profile from '../routes/Profile';
import Navigation from './Navigation';

// Props
// isLoggedIn, userObj : App.js
const Router = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home userObj={userObj} />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
