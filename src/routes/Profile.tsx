import { authService, dbService } from '../fbase';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { updateProfile, User } from 'firebase/auth';
import Navigation from '../components/Navigation';
import { Homelayout } from '../css/HomeStyle';


interface ProfileProps{
  userObj: User | null;
}

// userObj : 로그인한 유저 정보 prop
const Profile:React.FC<ProfileProps> = ({ userObj }) => {
  const navigate = useNavigate();
  const [newDisplayname, setNewDisplayName] = useState<string>(userObj?.displayName || "");
  
// 로그아웃
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  // 내 chuweets 얻는 function
  const getMyChuweets = async () => {
    // chuweets 불러오기
    // dbService의 컬렉션 중 "chuweets" Docs에서 userObj의 uid와 동일한
    // creatorID를 가진 모든 문서를 내림차순으로 가져오는 쿼리(요청) 생성
    if(userObj){
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
    }
      
    // 내 chuweets 얻는 function 호출
    useEffect(() => {
      getMyChuweets();
    }, []);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewDisplayName(event.target.value);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(userObj){
        if (userObj.displayName !== newDisplayname) {
          await updateProfile(userObj, { displayName: newDisplayname });
        }
      }
      
  };

  return (
    <Homelayout>
      <Navigation/>
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
      Profile
    </Homelayout>
  );
};

export default Profile;
