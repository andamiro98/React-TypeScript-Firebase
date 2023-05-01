import React, { useState } from 'react';

const Home = () => {
  const [post, setPost] = useState('');

  const onsubmit = (e) => {
    e.preventDefault();
  };

  const onchange = (e) => {
    setPost(e.target.value);
  };

  return (
    <form onsubmit={onsubmit}>
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
