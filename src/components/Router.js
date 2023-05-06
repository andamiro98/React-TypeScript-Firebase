import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Profile from '../routes/Profile';

// Props
// isLoggedIn, userObj : App.js
const Router = ({ userObj, refreshUser, isLoggedIn }) => {
  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/"
            element={<Home userObj={userObj} isLoggedIn={isLoggedIn} />}
          />
        ) : (
          <Route path="/login" element={<Auth />} />
        )}
        <Route
          path="/profile"
          element={<Profile userObj={userObj} refreshUser={refreshUser} />}
        />
      </Routes>
    </>
  );
};

export default Router;
