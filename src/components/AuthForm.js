import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authService } from '../fbase';
import { AiOutlineQq } from 'react-icons/ai';
import {
  AuthInput,
  AuthLayout,
  AuthSubmit,
  AuthSwitch,
  Authform,
} from '../css/AuthFormStyle';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const toggleAccount = () => {
    setNewAccount((newAccount) => !newAccount);
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        //Create account
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        //Log In
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthLayout>
      <AiOutlineQq className="Usericon" />
      <a>Old Boys</a>
      <Authform onSubmit={onSubmit}>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <AuthSubmit type="submit" value={newAccount ? '로그인' : '회원가입'} />
      </Authform>

      <AuthSwitch onClick={toggleAccount}>
        {newAccount ? '회원가입' : '로그인'}
      </AuthSwitch>
    </AuthLayout>
  );
};

export default AuthForm;
