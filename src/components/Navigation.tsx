import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer, Nav, Navtext } from '../css/Navstyle';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineQq } from 'react-icons/ai';
import { ReactComponent as Iclol } from '../svg/LoL.svg';
import { ReactComponent as IcLoad } from '../svg/Loadmap.svg';
import { ReactComponent as IcTT } from '../svg/TT.svg';
const Navigation = () => {
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
        <IcTT className="TTicon" />
        <Navtext>Home</Navtext>
      </Nav>

      <Nav>
        <Iclol className="LoLicon" />
        <Navtext>LoL</Navtext>
      </Nav>

      <Nav>
        <IcLoad className="Loadicon" />
        <Navtext>History</Navtext>
      </Nav>

      <Nav onClick={navProfile}>
        <FaUserCircle className="Usericon" />
        <Navtext>Profile</Navtext>
        {/* {userObj?.displayName} */}
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
