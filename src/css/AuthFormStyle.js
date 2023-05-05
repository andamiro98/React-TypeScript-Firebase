import styled from 'styled-components';

export const AuthLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Authform = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const AuthInput = styled.input`
  max-width: 320px;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background-color: #eeeeee;
  margin-bottom: 10px;
  font-size: 16px;
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
  max-width: 320px;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;
  background: #f05454;
  color: #e4dccf;
  margin-top: 10;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
`;

export const AuthSwitch = styled.div`
  margin: auto;
  max-width: 100%;
  width: 65px;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  font-size: 16px;
  text-decoration: underline;
`;
