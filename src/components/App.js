import Router from './Router';
import React, { useEffect, useState } from 'react';
import { authService } from '../fbase';
import Layout from './Layout';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { useNavigate } from 'react-router-dom';

function App() {
  //console.log(authService.currentUser); // user | null
  const [init, setInit] = useState(false); // firebase initialize
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [userObj, setUserObj] = useState(null); // user information
  const navigate = useNavigate();
  useEffect(() => {
    // onAuthStateChanged Method : 사용자의 로그인 상태의 관리 변화를 관찰하는 메서드
    // navigate('/login');
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({ ...user });
  };

  return (
    <Layout>
      {/* {init ? (
        <div>
          <Auth
            isLoggedIn={isLoggedIn}
            userObj={userObj}
            refreshUser={refreshUser}
          />
        </div>
      ) : (
        'Initializeing...'
      )} */}

      {init ? (
        <Router
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializeing...'
      )}

      {/* <footer>&copy; {new Date().getFullYear()} Old-boys</footer> */}
    </Layout>
  );
}

export default App;
