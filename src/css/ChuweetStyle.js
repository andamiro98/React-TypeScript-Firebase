import styled from 'styled-components';

export const PostLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgBox = styled.div`
  /* width: 100%;
  max-width: 100px;
  height: 150px;
  align-items: center;
  display: flex; */
`;

export const PostImg = styled.img`
  /* width: 150px;
  height: 150px; */
  /* position: relative;
  bottom: 25px;
  right: 50px; */
  /* border-radius: 15px; */
`;

export const PostBox = styled.div`
  background-color: #dddddd;
  opacity: 0.9;
  margin-top: 50px;
  box-shadow: 5px 10px 15px 0px black;

  width: 19rem;
  border-width: 0px;

  .card-body {
    padding: 5px;
    img {
      border-radius: 8px;
      width: 50px;
      flex-direction: row;
    }
    .card-title {
      margin: 0px;
      margin-left: 3px;
      flex-direction: row;
    }
    .card-text {
      margin-top: 5px;
      padding: 5px;
    }
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    font-size: 14px;
    font-weight: 500;
    margin-left: 3px;
  }
`;

export const PostTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostText = styled.div`
  /* padding-top: 25px;
  padding: 25px 10px 25px 10px;
  width: 100%;
  max-width: 400px;
  background-color: #dddddd;
  color: #222831;
  border-radius: 15px; */
`;
