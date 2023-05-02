import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
} from 'firebase/firestore';

const Home = ({ userObj }) => {
  console.log(userObj);
  const [post, setPost] = useState('');
  const [chuweets, setChuweets] = useState([]);

  const getChuweets = async () => {
    const q = query(collection(dbService, 'chuweets'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const ChuweetObj = {
        ...doc.data(),
        id: doc.id,
      };
      setChuweets((prev) => [ChuweetObj, ...prev]);
    });
  };

  useEffect(() => {
    getChuweets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    await addDoc(collection(dbService, 'chuweets'), {
      text: post,
      createdAt: serverTimestamp(),
      userID: userObj.uid,
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
          <div key={chuweet.id}>
            <h4>{chuweet.post}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
