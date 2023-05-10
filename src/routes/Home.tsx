import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
// import Chuweet from '../components/Chuweet';
import Addchuweet from '../components/AddChuweet';
import Navigation from '../components/Navigation';
import { Homelayout } from '../css/HomeStyle';
import { User } from 'firebase/auth';

interface HomeProps{
  isLoggedIn: boolean;
  userObj: User | null;
}
//Props
// userObj : App.js => Router.js => Home.js
const Home:React.FC<HomeProps> = ({isLoggedIn, userObj}) => {
  // console.log(userObj);

  const [chuweets, setChuweets] = useState([]);



  return (
    <Homelayout>
      <Navigation />
      {isLoggedIn && (
        <div>
          <Addchuweet userObj={userObj} />
        </div>
      )}

      Home
    </Homelayout>
  );
};

export default Home;
