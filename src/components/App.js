import Router from "components/Router";
import React, { useState } from "react";
import {authService} from "fbase"


function App() {
  console.log(authService.currentUser) // user | null
  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <Router isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Old-boys</footer>
    </>
    
  );
}

export default App;
