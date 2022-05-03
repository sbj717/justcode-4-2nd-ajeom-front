import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import MyProfileTop from './MyProfileTop';
import MyProfileCenter from './MyProfileCenter';

function MyProfileLayout() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:8000/user/myProfile`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Cover />
      <Container>
        <MyProfileTop profileData={profileData} />
        {profileData.is_author === 1 ? (
          <MyProfileCenter profileData={profileData} />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 320px;
  background: #f8f8f8;
`;

const Container = styled.div`
  width: 700px;
  height: 100vh;
  margin: 0 auto;
  color: #333;
  padding-top: 35px;
  position: relative;
  z-index: 8;
`;
export default MyProfileLayout;
