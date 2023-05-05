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
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <St_AuthContainer>
      <AuthForm />
      <St_AuthBtns>
        <St_AuthBtn name="google" onClick={onSocialClick}>
          Continue with Google
        </St_AuthBtn>
        <St_AuthBtn name="github" onClick={onSocialClick}>
          Continue with Github
        </St_AuthBtn>
      </St_AuthBtns>
    </St_AuthContainer>
  );
};

export default Auth;
