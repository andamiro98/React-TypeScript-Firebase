import styled from "styled-components";


export const ProfileLayout = styled.div`
height:100vh;
width: 100%;
max-width: 500px;
`

export const ProfileForm = styled.form`
  display: flex;
  justify-content:center;
`

export const NameInput = styled.input`
  background-color:#dddddd;
  width: 250px;
  height: 40px;
  padding: 0px 10px;
  color: #222831;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;

  ::placeholder {
    color: #222831;
    font-weight: 500;
    font-size: 15px;
    font-family: 'googleSingleDay';
    opacity:0.8;
  }
  :hover {
    opacity: 0.8;
  }

`

export const SubmitInput = styled.input`
  width:90px;
  display:flex;
  justify-content: center;  
  margin-left: 15px;
  background-color:#dddddd;
  border-radius: 5px;
  :hover{
    background-color: #f05454;
    cursor: pointer;
  }
`

export const OutBtn = styled.button`
  font-family: 'googleSingleDay';
  display: flex;
  justify-content:center;
  border-radius: 5px;
  border: none;
  background-color: #f05454;
  color:#222831;
  margin: auto;
  margin-top: 30px;
  width:100%;
  max-width: 360px;
  :hover{
    opacity: 0.8;
  }
`