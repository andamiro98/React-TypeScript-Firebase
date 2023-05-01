import Router from 'components/Router';
import React, { useEffect, useState } from 'react';
import { authService } from 'fbase';

function App() {
  console.log(authService.currentUser); // user | null

  const [init, setInit] = useState(false); // firebase initialize
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // onAuthStateChanged Method : 사용자의 로그인 상태의 관리 변화를 관찰하는 메서드
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializeing...'}

      <footer>&copy; {new Date().getFullYear()} Old-boys</footer>
    </>
  );
}

export default App;