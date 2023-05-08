import styled from 'styled-components';

export const AuthLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;

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
  .Usericon {
    display: flex;
    color: #dddddd;
    font-size: 80px;
    margin-bottom: 0px;
    :hover {
      color: #f05454;
    }
  }
  a {
    font-family: 'googleSingleDay';
    font-size: 30px;
    color: #f05454;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const Authform = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const AuthInput = styled.input`
  background-color: #eeeeee;
  color: #393e46;
  :focus {
    opacity: 0.9;
  }
  ::placeholder {
    color: #393e46;
  }
`;

export const AuthSubmit = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  background: #f05454;
  color: #e4dccf;
  margin-top: 10;
  cursor: pointer;
  font-weight: bold;
`;

export const AuthSwitch = styled.div`
  margin: auto;
  max-width: 320px;
  width: 100%;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 25px;
  display: block;
  font-size: 16px;
  text-decoration: underline;
  :hover {
    opacity: 0.7;
  }
`;
