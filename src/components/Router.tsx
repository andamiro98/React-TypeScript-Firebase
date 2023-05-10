import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Profile from '../routes/Profile';
import NewAccount from './NewAccount';
import { User } from 'firebase/auth';
// Props
// isLoggedIn, userObj : App.js


interface RouterProps {
  isLoggedIn: boolean;
  userObj: User | null;
}

  const Router:React.FC<RouterProps> = ( { isLoggedIn, userObj }) => {
  // React.FC는 React 함수형 컴포넌트의 타입을 정의할 때 사용하는 제네릭 타입 
  // FC는 "Function Component"의 약어 
  // React.FC를 사용하면 컴포넌트에 대한 props의 타입을 명시적으로 선언할 수 있으며 
  //반환되는 JSX의 타입도 추론된다. 따라서 코드의 가독성을 높이고 버그를 줄일 수 있다.

    return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home userObj={userObj} />} />
        ) : (
          <Route path="/"  element={<Auth/>} />
        )}
        <Route path="/profile" element={<Profile  userObj={userObj} />}/>
        <Route path='/newaccount' element={<NewAccount/>}/>
      </Routes>
    </>
  );
};

export default Router;
