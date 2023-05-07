import React, { useState } from 'react';
import { dbService, storageService } from '../fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { BsThreeDots } from 'react-icons/bs';
import {
  PostBox,
  PostLayout,
  PostTime,
  ProfileBox,
  MenuBox,
  BodyTopBox,
} from '../css/ChuweetStyle';

// interface ChuweetObj {
//   createdAt: {
//     seconds: number;
//     nanoseconds: number;
//   };
//   creatorID: string;
//   postid: string;
//   text: string;
// }

// Props
// chuweetObj : <Home> of chuweets
// isOwner : <Home> of chuweets.map
const Chuweet = ({ chuweetObj, isOwner, userObj }) => {
  const [update, setUpdate] = useState(false);
  const [updatePost, setUpdatePost] = useState(chuweetObj.text);
  const [menu, setMenu] = useState(false);
  const ChuweetTextRef = doc(dbService, 'chuweets', `${chuweetObj.postid}`);

  const dateInSeconds = chuweetObj.createdAt.seconds;
  const dateInNanoseconds = chuweetObj.createdAt.nanoseconds;
  const date = new Date(dateInSeconds * 1000 + dateInNanoseconds / 1000000);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const onDeleteClick = async () => {
    const reCheck = window.confirm('삭제하시겠습니까?');
    if (reCheck) {
      await deleteDoc(ChuweetTextRef);
      // 삭제하려는 이미지 파일 가리키는 ref
      // chuweetObj attachmentUrl이 바로 삭제하려는 그 url임
      await deleteObject(ref(storageService, chuweetObj.attachmentUrl));
    }
  };

  const updateToggle = () => {
    setUpdate((prev) => !prev);
  };

  const onChange = (e) => {
    setUpdatePost(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(chuweetObj.text, updatePost);
    await updateDoc(ChuweetTextRef, {
      text: updatePost,
    });
    setUpdate(false);
  };

  const onClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <PostLayout>
      {update ? (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={updatePost}
              onChange={onChange}
              required
            />
            <input type="submit" value="수정하기" />
          </form>
          <button onClick={updateToggle}>취소</button>
        </div>
      ) : (
        <PostBox className="card">
          {chuweetObj.attachmentUrl && (
            <img
              src={chuweetObj.attachmentUrl}
              className="card-img-top"
              alt="..."
            />
          )}

          <div className="card-body">
            <BodyTopBox>
              <ProfileBox>
                <img src={userObj.photoURL} />
                <div>
                  <div className="card-title">
                    <div>{userObj.displayName}</div>
                  </div>
                  <div>{`${year}년 ${month}월 ${day}일`}</div>
                </div>
              </ProfileBox>

              <MenuBox>
                <BsThreeDots className="ArrowIc" onClick={onClickMenu} />
                {menu && (
                  <div>
                    <button onClick={onDeleteClick}>삭제하기</button>
                    <button onClick={updateToggle}>수정하기</button>
                  </div>
                )}
              </MenuBox>
            </BodyTopBox>

            <p className="card-text">{chuweetObj.text}</p>

            {/* <div>
              {isOwner && (
                <div>
                  <button onClick={onDeleteClick}>삭제하기</button>
                  <button onClick={updateToggle}>수정하기</button>
                </div>
              )}
            </div> */}
          </div>
        </PostBox>
      )}
    </PostLayout>
  );
};

export default Chuweet;
