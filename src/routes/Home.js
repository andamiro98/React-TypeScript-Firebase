import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Chuweet from '../components/Chuweet';
import Addchuweet from '../components/AddChuweet';
import Navigation from '../components/Navigation';
import { Homelayout } from '../css/HomeStyle';

//Props
// userObj : App.js => Router.js => Home.js
const Home = ({ userObj, isLoggedIn, refreshUser }) => {
  console.log(userObj);

  const [chuweets, setChuweets] = useState([]);

  // const getChuweets = async () => {
  //   const q = query(collection(dbService, 'chuweets'));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     const ChuweetObj = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setChuweets((prev) => [ChuweetObj, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getChuweets();
    const q = query(
      collection(dbService, 'chuweets'),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const chuweetArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        postid: doc.id,
      }));
      setChuweets(chuweetArr);
      console.log(chuweetArr);
    });
  }, []);

  return (
    <Homelayout>
      {isLoggedIn && (
        <>
          <Navigation userObj={userObj} />
          <Addchuweet userObj={userObj} />
        </>
      )}

      <div>
        {chuweets.map((chuweet) => (
          <Chuweet
            key={chuweet.postid}
            chuweetObj={chuweet}
            isOwner={chuweet.creatorID === userObj.uid}
          />
        ))}
      </div>
    </Homelayout>
  );
};

export default Home;
