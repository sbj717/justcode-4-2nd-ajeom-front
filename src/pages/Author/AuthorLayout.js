import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AuthorProfileTop from './AuthorProfileTop';
import AuthorProfileCenter from './AuthorProfileCenter';
import { localhost } from '../../config';

function AuthorLayout() {
  const params = useParams();
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    fetch(`${localhost}/user/authorProfile/${params.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, [params.id]);

  const userId = params.id;

  return (
    <>
      <Header />
      <Cover />
      <Container>
        <AuthorProfileTop profileData={profileData} />
        {profileData.is_author === 1 ? (
          <AuthorProfileCenter profileData={profileData} userId={userId} />
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
export default AuthorLayout;
