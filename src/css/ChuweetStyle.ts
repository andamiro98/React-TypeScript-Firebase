import styled from 'styled-components';

export const PostLayout = styled.div`
  display: flex;

  justify-content: center;
`;

export const PostBox = styled.div`
  display: flex;
  background-color: #dddddd;
  opacity: 0.9;
  margin-top: 50px;
  box-shadow: 5px 10px 15px 0px black;
  width: 400px;
  border-width: 0px;
  .card-img-top {
    margin: auto;
    height: 400px;
  }

  .card-body {
    padding: 10px;
    img {
      border-radius: 8px;
      width: 55px;
      height: 55px;
    }
    .card-title {
      width: fit-content;
      margin: 0px;
      div {
        font-size: 14px;
      }
    }
    .card-text {
      margin-top: 5px;
      padding: 5px;
    }
  }
`;
export const BodyTopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: start;
  width: 60%;

  div {
    font-size: 14px;
    font-weight: 500;
    margin-left: 3px;
  }
`;

export const PostTime = styled.div``;

export const MenuBox = styled.div`
  display: flex;
  width: 40%;
  height: 80px;
  flex-direction: column;

  .ArrowIc {
    margin-left: 130px;
    font-size: 20px;
    color: #222831;
    :hover {
      color: #f05454;
      cursor: pointer;
    }
  }
  .deletepost {
    margin-right: 10px;
    font-size: 20px;
    color: #f05454;
  }
  .petchpost {
    margin-right: 10px;
    font-size: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  span {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;
