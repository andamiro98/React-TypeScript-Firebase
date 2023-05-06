import styled from 'styled-components';

export const NavContainer = styled.div`
  div {
    align-items: center;
    justify-content: center;
  }
  .Usericon {
    display: flex;
    color: #dddddd;
    font-size: 50px;
    margin: auto;
    :hover {
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Nav = styled.div`
  display: block;
  width: 100%;
  max-width: 100px;
  margin: auto;
  :hover {
    opacity: 0.7;
    .Usericon {
      color: #f05454;
    }
  }
  .LoLicon {
    display: flex;
    color: #dddddd;
    font-size: 25px;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Navtext = styled.div`
  display: flex;
  color: #dddddd;
  font-size: 15px;
  font-family: 'googleSingleDay';
`;
