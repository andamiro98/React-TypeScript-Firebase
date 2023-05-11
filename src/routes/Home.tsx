import React, { useEffect, useState } from 'react';
import { dbService } from '../fbase';
import { collection, query, orderBy, onSnapshot, DocumentData  } from 'firebase/firestore';
import Chuweet from '../components/Chuweet';
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
  const [chuweets, setChuweets] = useState<DocumentData[]>([]);

  // const getChuweets = async () => {
  //   const q = query (collection(dbService, 'chuweets'));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     const ChuweetObj = {
  //       ...doc.data(),
  //       id: doc.id,
  //     }
  //     setChuweets((prev) => [ChuweetObj, ...prev]);
      
  //   });
  // };

  useEffect(() => {
    // getChuweets();
    const q = query(
      collection(dbService, 'chuweets'),
      orderBy('createdAt', 'desc')
    );
    // onSnapshot 메서드 = realtime update
    onSnapshot(q, (snapshot) => {
      const chuweetArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        postid: doc.id,
      }));
      setChuweets(chuweetArr);
      console.log(chuweetArr);
    });
  }, []);
  console.log(chuweets)
  return (
    <Homelayout>
      <Navigation />
      {isLoggedIn && (
        <div>
          <Addchuweet userObj={userObj} />
        </div>
      )}

      <div>
        {chuweets.map((chuweet) => (
          <Chuweet key={chuweet.postid} chuweetObj={chuweet} userObj={userObj}/>
        ))}
      </div>
    </Homelayout>
  );
};

export default Home;
