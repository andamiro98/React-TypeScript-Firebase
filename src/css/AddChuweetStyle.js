import styled from 'styled-components';

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const PostInput = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 0px 20px;
  color: white;
  background-color: #dddddd;
  /* border: 1px solid #f05454; */
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
`;
