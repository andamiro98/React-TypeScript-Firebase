import React, { useRef, useState } from 'react';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { dbService, storageService } from '../fbase';
import { User } from 'firebase/auth';
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
import { AiFillDelete } from 'react-icons/ai';
import { SubmitInput } from '../css/AddChuweetStyle';

interface AddchuweetProps {
  userObj: User | null;
}

const Addchuweet:React.FC<AddchuweetProps> = ({ userObj }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const [post, setPost] = useState('');
  const [attachment, setAttachment] = useState(''); // readAsDataURL된 

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost(event.target.value);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if(file){
      const reader = new FileReader(); //FileReader API 비동기적으로 파일의 내용을 읽어들이는데 사용
      reader.onloadend = (finishedEvent: ProgressEvent<FileReader>) => {
        //   ^파일읽기가 끝나면 실행되는 이벤트
        // 파일을 인코딩하는 작업은 readAsDataURL 메소드 내부에서 수행되고 파일의 내용을 읽어들였다면 
        // readAsDataURL에서 인코딩된 스티링 데이터가 result에 담겨 setAttachment()를 통해 상태 변수에 저장한다.
        if(finishedEvent.target){
          // finishedEvent.currentTarget이 null인 이유는 onloadend 이벤트 핸들러가 실행될 때, 이벤트 타겟이 존재하지 않는 경우때문.
          setAttachment(finishedEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      //     ^base64 인코딩 된 스트링 데이터가 비동기적으로 result 속성(attribute)에 담아지게 됩니다.
    }
    // readAsDataURL() 함수는 파일을 비동기적으로 읽기 때문에 readAsDataURL()함수가 실행되고 있는 동안에는 다른 코드들이 실행될 수 있다. 
    // 만약 readAsDataURL() 함수가 실행되고 있는 중에 이미 setAttachment() 함수가 실행된다면, 
    // 이전 파일의 데이터가 새로운 파일의 데이터로 덮어씌워질 가능성이 있다.
  };

  const onClearAttachment = () => {
    if (fileInput.current) {
      fileInput.current.value = '';
    }
    setAttachment('');
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if(userObj){
      if (post === '') {
        alert('게시글을 작성하세요');
        return;
      }
      event.preventDefault();

      let attachmentUrl = '';
      if (attachment !== '') {
        const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        //                    ^firebas storageService 파일 경로 참조 만들기 (유저아이디로 파일을 구분)
        const response = await uploadString(
          // ^storage 참조 경로로 파일 업로드 하기
          attachmentRef,
          attachment,
          'data_url' // format
        );
        attachmentUrl = await getDownloadURL(response.ref);
        //                    ^storage 참조 경로에 있는 파일의 URL 다운로드
      }
      const chuweetObj = {
        text: post,
        createdAt: serverTimestamp(),
        creatorID: userObj.uid,
        attachmentUrl,
      };
  
      // NoSQL database는 collection과 document을 가진다.
      // collection는 폴더 document는 문서
      //chuweetObj 형태로 새로운 document 생성하여 chuweets 콜렉션에 넣기
      await addDoc(collection(dbService, 'chuweets'), chuweetObj);
      
      if (fileInput.current) {
        fileInput.current.value = '';
      }
      setPost('');
      setAttachment('');

    }
  };

  return (
    <PostForm onSubmit={onSubmit}>
      <InputContainer>
        <PostInput
          type="text"
          value={post}
          onChange={onchange}
          placeholder="Add..."
          maxLength={200}
        />
      </InputContainer>

      <FileLabel htmlFor="input-file">
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
        <ClearBtn onClick={onClearAttachment}>
          <AiFillDelete className="CancelICon" />
        </ClearBtn>
      )}
    </PostForm>
  );
};

export default Addchuweet;
