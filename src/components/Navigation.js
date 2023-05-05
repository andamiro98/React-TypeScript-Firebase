import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer } from '../css/Navstyle';
import { FaUserCircle } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';

const Navigation = ({ userObj }) => {
  const navigate = useNavigate();

  const navHome = () => {
    navigate('/');
  };

  const navProfile = () => {
    navigate('/profile');
  };

  return (
    <NavContainer>
      <div onClick={navHome}>
        <HiHome className="Usericon" />
        <div>Home</div>
      </div>

      <div onClick={navProfile}>
        <FaUserCircle className="Usericon" />
        <div>{userObj.displayName}의 Profile</div>
      </div>
    </NavContainer>
  );
};

export default Navigation;
