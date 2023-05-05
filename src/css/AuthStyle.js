import styled from 'styled-components';

export const St_AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const St_AuthBtns = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0px;
  margin-bottom: auto;
  height: 50px;
`;

export const St_AuthBtn = styled.img`
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-size: cover;

  :hover {
    width: 80px;
    height: 80px;
  }
`;
