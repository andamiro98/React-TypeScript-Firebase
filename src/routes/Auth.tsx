import React from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { authService } from '../fbase';
import AuthForm from '../components/AuthForm';
import { St_AuthContainer, St_AuthBtns, St_AuthBtn } from '../css/AuthStyle';
import { useNavigate } from 'react-router-dom';



const Auth = () => {
  const onSocialClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const targetname = event.currentTarget.getAttribute("data-name") as string;
    // target과 currentTarget의 차이점
    console.log(targetname);
    
    let provider:GoogleAuthProvider | GithubAuthProvider | null = null;
    // TypeScript 컴파일러가 null 값을 타입으로 강제하는 경우에 사용
    // null이 가능하다고 명시적으로 알려줌
    if (targetname === 'google') {
      provider = new GoogleAuthProvider();
    } else if (targetname === 'github') {
      provider = new GithubAuthProvider();
    }

  // provider로 로그인
  if (provider !== null) {
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  }

  }
  





  return (
    <St_AuthContainer>
      <AuthForm />
      <St_AuthBtns>
        <St_AuthBtn src="./google.png" data-name="google" onClick={onSocialClick} />
        <St_AuthBtn src="./github.png" data-name="github" onClick={onSocialClick} />
      </St_AuthBtns>
    </St_AuthContainer>
  );
};

export default Auth;
