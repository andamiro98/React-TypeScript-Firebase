import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authService } from '../fbase';
import { AuthInput } from '../css/AuthFormStyle';

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
    <>
      <form onSubmit={onSubmit}>
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
        <input
          type="submit"
          value={newAccount ? 'Create Account' : 'Sign In'}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
    </>
  );
};

export default AuthForm;
