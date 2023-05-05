import styled from 'styled-components';

export const St_AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const St_AuthBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
`;

export const St_AuthBtn = styled.button`
  background: white;
  color: black;
  width: 290px;
  padding: 7px 0px 7px 0px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border: 0.5px solid rgb(208, 211, 215);
  color: rgb(66, 67, 68);
  :hover {
    background: rgb(247, 247, 247);
    color: black;
  }
`;
