import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
} from 'firebase/firestore';

const Home = () => {
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
      console.log(ChuweetObj);
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
      post,
      createdAt: serverTimestamp(),
    });
    setPost('');
  };

  const onchange = (e) => {
    setPost(e.target.value);
  };

  return (
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
  );
};

export default Home;
