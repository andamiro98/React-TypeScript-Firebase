import React, { useState } from 'react';
import { dbService } from 'fbase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Home = () => {
  const [post, setPost] = useState('');

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
