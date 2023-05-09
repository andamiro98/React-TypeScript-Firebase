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
    
    let provider;
    if (targetname === 'google') {
      provider = new GoogleAuthProvider();
    } else if (targetname === 'github') {
      provider = new GithubAuthProvider();
    }

  }
  
     // provider로 로그인
  //   const data = await signInWithPopup(authService, provider);
  //   console.log(data);
  //   navigate('/');
  // };


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
