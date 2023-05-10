import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { authService } from '../fbase';
import { AiOutlineQq } from 'react-icons/ai';
import {
  AuthInput,
  AuthLayout,
  AuthSubmit,
  AuthSwitch,
  Authform,
} from '../css/AuthFormStyle';
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()


  const toggleAccount = () => {
    navigate("/newaccount")
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }

  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // ^로그인 
    event.preventDefault();
    try {
      let data = await signInWithEmailAndPassword(authService, email, password);
      console.log(data);
    } catch (error: unknown) {
      if(error instanceof Error){
        setError(error.message);
        console.log(error)
      }
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
        <AuthSubmit type="submit" value={'로그인'} />
      </Authform>

      <AuthSwitch onClick={toggleAccount}>
        {'회원가입'}
      </AuthSwitch>
    </AuthLayout>
  );
};

export default AuthForm;
