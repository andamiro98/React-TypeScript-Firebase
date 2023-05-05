import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer, Nav, Navtext } from '../css/Navstyle';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineQq } from 'react-icons/ai';

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
      <Nav onClick={navHome}>
        <AiOutlineQq className="Usericon" />
        <Navtext>Home</Navtext>
      </Nav>

      <Nav onClick={navProfile}>
        <FaUserCircle className="Usericon" />
        <Navtext>{userObj?.displayName}의 Profile</Navtext>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
