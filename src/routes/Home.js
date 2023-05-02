import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import Chuweet from 'components/Chuweet';

//Props
// userObj : App.js => Router.js => Home.js
const Home = ({ userObj }) => {
  console.log(userObj);
  const [post, setPost] = useState('');
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, 'chuweets'), {
      text: post,
      createdAt: serverTimestamp(),
      creatorID: userObj.uid,
    });
    setPost('');
  };

  const onchange = (e) => {
    setPost(e.target.value);
  };
  console.log(chuweets);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={post}
          onChange={onchange}
          placeholder="추억의 녀석들"
          maxLength={200}
        />
        <input type="submit" value="완료" />
      </form>
      <div>
        {chuweets.map((chuweet) => (
          <Chuweet
            key={chuweet.postid}
            chuweetObj={chuweet}
            isOwner={chuweet.creatorID === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
