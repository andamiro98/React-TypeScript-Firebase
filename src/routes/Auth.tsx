import React from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { authService } from '../fbase';
import AuthForm from '../components/AuthForm';
import { St_AuthContainer, St_AuthBtns, St_AuthBtn } from '../css/AuthStyle';


const Auth = () => {
  const onSocialClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const targetname = event.currentTarget.getAttribute("data-name") as string;
    // target과 currentTarget의 차이점
    let provider: GoogleAuthProvider | GithubAuthProvider | null = null;
    //  null = null TypeScript 컴파일러가 null 값을 타입으로 강제하는 경우에 사용
    // null이 가능하다고 명시적으로 알려줌
    
    if(provider !== null){
      if (targetname === 'google') {
        provider = new GoogleAuthProvider();
      } else if (targetname === 'github') {
        provider = new GithubAuthProvider();
      }
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
