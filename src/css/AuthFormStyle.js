import styled from 'styled-components';

export const AuthInput = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: #394867;
  margin-bottom: 10px;
  font-size: 12px;
  color: #f1f6f9;
  :focus {
    opacity: 0.9;
  }
  ::placeholder {
    color: #f1f6f9;
  }
`;
