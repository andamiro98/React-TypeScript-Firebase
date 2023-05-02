import React from 'react';

const Chuweet = ({ chuweetObj, isOwner }) => {
  console.log(chuweetObj);
  return (
    <div>
      <h4>{chuweetObj.text}</h4>
      {isOwner && (
        <>
          <button>삭제하기</button>
          <button>수정하기</button>
        </>
      )}
    </div>
  );
};

export default Chuweet;
