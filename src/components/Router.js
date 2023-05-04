import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Profile from '../routes/Profile';
import Navigation from './Navigation';

// Props
// isLoggedIn, userObj : App.js
const Router = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home userObj={userObj} />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route
          path="/profile"
          element={<Profile userObj={userObj} refreshUser={refreshUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
