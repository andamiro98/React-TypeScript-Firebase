import React, { useState } from 'react';
import { dbService, storageService } from '../fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import {
  PostBox,
  PostImg,
  PostText,
  TextBox,
  ImgBox,
  PostLayout,
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
const Chuweet = ({ chuweetObj, isOwner }) => {
  const [update, setUpdate] = useState(false);
  const [updatePost, setUpdatePost] = useState(chuweetObj.text);
  console.log(chuweetObj.text);
  const ChuweetTextRef = doc(dbService, 'chuweets', `${chuweetObj.postid}`);

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

  return (
    <PostLayout>
      {update ? (
        <>
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
        </>
      ) : (
        <PostBox>
          <ImgBox>
            {chuweetObj.attachmentUrl && (
              <PostImg src={chuweetObj.attachmentUrl} />
            )}
          </ImgBox>
          <PostText>{chuweetObj.text}</PostText>
          {/* <div>
            {isOwner && (
              <>
                <button onClick={onDeleteClick}>삭제하기</button>
                <button onClick={updateToggle}>수정하기</button>
              </>
            )}
          </div> */}
        </PostBox>
      )}
    </PostLayout>
  );
};

export default Chuweet;
