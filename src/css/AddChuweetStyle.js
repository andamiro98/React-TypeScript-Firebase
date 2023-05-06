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
  ::placeholder {
    color: #222831;
    font-weight: 500;
    font-size: 15px;
  }
  flex-grow: 1;
  height: 40px;
  padding: 0px 20px;
  color: #222831;
  background-color: #dddddd;
  /* border: 1px solid #f05454; */
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 250px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 20px;
  color: #f05454;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  .ImgAddIcon {
    margin-top: 3px;
    margin-left: 5px;
    font-size: 30px;
  }
`;

export const Bottomdiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const SubmitInput = styled.input`
  width: 100%;
  max-width: 80px;
  height: 25px;
  color: #222831;
  display: flex;
  border-radius: 5px;
  background-color: #dddddd;
  justify-content: center;
  font-family: 'googleSingleDay';
  :hover {
    background-color: #f05454;
  }
`;
