import styled from 'styled-components';

export const PostLayout = styled.div`
  background-color: #dddddd;
  border-radius: 15px;
`;

export const ImgBox = styled.div`
  width: 100%;
  max-width: 100px;
  height: 150px;
  align-items: center;
  display: flex;
`;

export const PostImg = styled.img`
  width: 150px;
  height: 150px;
  position: relative;
  bottom: 25px;
  right: 50px;
  border-radius: 15px;
  /* box-shadow: 0px 5px 15px 0px #dddddd; */
`;

export const PostBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 10px 15px 0px black;
  background-color: #dddddd;
  border-radius: 15px;
`;

export const PostText = styled.div`
  padding-top: 25px;
  padding: 25px 10px 25px 10px;
  width: 100%;
  max-width: 400px;
  background-color: #dddddd;
  color: #222831;
  border-radius: 15px;
`;
