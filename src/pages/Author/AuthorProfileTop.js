import React from 'react';
import styled from 'styled-components';

function AuthorProfileTop({ profileData }) {
  return (
    <Top>
      <ProfileBox>
        <NickName>{profileData.nickname}</NickName>
      </ProfileBox>
      <ImageBox>
        <img src={profileData.profile_img_url} alt="profileImg" />
      </ImageBox>
    </Top>
  );
}

export default AuthorProfileTop;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const NickName = styled.div`
  font-weight: 100;
  font-size: 28px;
`;

const ImageBox = styled.div`
  margin-top: -80px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.05);
  img {
    width: 100%;
  }
`;
