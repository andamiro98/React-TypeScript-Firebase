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
  const navigate = useNavigate();
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    console.log(event.target.name);

    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }

    // provider로 로그인
    const data = await signInWithPopup(authService, provider);
    console.log(data);
    navigate('/');
  };

  return (
    <St_AuthContainer>
      <AuthForm />
      <St_AuthBtns>
        <St_AuthBtn src="./google.png" name="google" onClick={onSocialClick} />
        <St_AuthBtn src="./github.png" name="github" onClick={onSocialClick} />
      </St_AuthBtns>
    </St_AuthContainer>
  );
};

export default Auth;
