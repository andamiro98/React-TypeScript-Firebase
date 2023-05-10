import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { authService } from '../fbase';
import { AuthInput } from '../css/AuthFormStyle';
import { useNavigate } from 'react-router-dom';
import { AccLayout, Accform, AccSubmit } from '../css/NewAccStyle';

const NewAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate=useNavigate()
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
    // ^회원가입
    event.preventDefault();
    try {
      let data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log(data);
      } catch (error: unknown) {
        if(error instanceof Error){
          setError(error.message);
          console.log(error)
      }
      }
      alert("회원가입이 완료")
      navigate("/")
  };

  return(
    <div>
   
    <AccLayout>
    <div>회원가입</div>
      <Accform onSubmit={onSubmit}>
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
        <AccSubmit className='AccSubmit' type="submit" value={'가입하기'} />
      </Accform>

    </AccLayout>
    </div>
  )
}

export default NewAccount;