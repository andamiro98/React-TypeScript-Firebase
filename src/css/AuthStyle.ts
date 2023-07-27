import styled from 'styled-components';

export const St_Back = styled.div`
`
export const St_AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, black , transparent 60%), /**url("/tter.jpg")**/;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
