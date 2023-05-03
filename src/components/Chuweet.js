import React, { useState } from 'react';
import { dbService, storageService } from '../fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

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
  console.log(chuweetObj);
  const ChuweetTextRef = doc(dbService, 'chuweets', `${chuweetObj.postid}`);

  const onDeleteClick = async () => {
    const reCheck = window.confirm('삭제하시겠습니까?');
    if (reCheck) {
      //delect
      await deleteDoc(ChuweetTextRef);
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
    <div>
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
        <>
          <h4>{chuweetObj.text}</h4>
          {chuweetObj.attachmentUrl && (
            <img src={chuweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>삭제하기</button>
              <button onClick={updateToggle}>수정하기</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Chuweet;
