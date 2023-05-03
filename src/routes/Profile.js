import { authService, dbService } from '../fbase';
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

// userObj : 로그인한 유저 정보 prop
const Profile = ({ userObj }) => {
  const navigate = useNavigate();
  const [newDisplayname, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  // 내 chuweets 얻는 function
  const getMyChuweets = async () => {
    // chuweets 불러오기
    // dbService의 컬렉션 중 "chuweets" Docs에서 userObj의 uid와 동일한
    // creatorID를 가진 모든 문서를 내림차순으로 가져오는 쿼리(요청) 생성
    const q = query(
      collection(dbService, 'chuweets'),
      where('creatorID', '==', userObj.uid)
    );

    //getDocs()메서드로 쿼리 결과 값 가져오기
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  };

  // 내 chuweets 얻는 function 호출
  useEffect(() => {
    getMyChuweets();
  }, []);

  const onChange = (e) => {
    setNewDisplayName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayname) {
      await updateProfile(userObj, { displayName: newDisplayname });
    }
  };

  return (
    <>
      <div>Profile</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayname}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
