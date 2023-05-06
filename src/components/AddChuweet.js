import React, { useRef, useState } from 'react';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { dbService, storageService } from '../fbase';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import {
  PostForm,
  InputContainer,
  PostInput,
  FileInput,
  FileLabel,
  Bottomdiv,
  ImgFile,
  ClearBtn,
} from '../css/AddChuweetStyle';
import { BiImageAdd } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

import { SubmitInput } from '../css/AddChuweetStyle';

const Addchuweet = ({ userObj }) => {
  const fileInput = useRef();

  const [post, setPost] = useState('');
  const [attachment, setAttachment] = useState('');

  const onchange = (e) => {
    setPost(e.target.value);
  };

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      setAttachment(finishedEvent.currentTarget.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onCleraAttachment = () => {
    setAttachment(null);
    fileInput.current.value = '';
    setAttachment('');
  };

  const onSubmit = async (e) => {
    if (post == '') {
      alert('게시글을 작성하세요');
      return;
    }

    e.preventDefault();
    let attachmentUrl = '';

    if (attachment !== '') {
      //파일 경로 참조 만들기
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      //storage 참조 경로로 파일 업로드 하기
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      console.log(response);
      //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachmentUrl 변수에 넣어서 업데이트
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
    }
    const chuweetObj = {
      text: post,
      createdAt: serverTimestamp(),
      creatorID: userObj.uid,
      attachmentUrl,
    };
    //chuweetObj 형태로 새로운 document 생성하여 chuweets 콜렉션에 넣기
    await addDoc(collection(dbService, 'chuweets'), chuweetObj);
    fileInput.current.value = '';
    setPost('');
    setAttachment('');
  };

  return (
    <PostForm onSubmit={onSubmit}>
      <InputContainer>
        <PostInput
          type="text"
          value={post}
          onChange={onchange}
          placeholder="추억 남기기"
          maxLength={200}
        />
      </InputContainer>

      <FileLabel for="input-file">
        Add Photos
        <BiImageAdd className="ImgAddIcon" />
      </FileLabel>
      <FileInput
        id="input-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInput}
      />
      {attachment && <ImgFile src={attachment} />}

      <Bottomdiv>
        <SubmitInput type="submit" value="Share" />
      </Bottomdiv>

      {attachment && (
        <ClearBtn onClick={onCleraAttachment}>
          <ImCancelCircle className="CancelICon" />
        </ClearBtn>
      )}
    </PostForm>
  );
};

export default Addchuweet;
