import styled from "styled-components";


export const  AccLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  .AccSubmit{
      width:50%;
      margin-top: 20px;
    }
  input {
    max-width: 400px;
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    :hover {
      opacity: 0.7;
    }
    
  }
  div{
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #eeeeee;
    }
`

export const Accform = styled.form`
  width: 100%;
  height: 100%;

`;

export const AccSubmit = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  background: #f05454;
  color: #e4dccf;
  cursor: pointer;
  font-weight: bold;
  margin: auto;
  
`;