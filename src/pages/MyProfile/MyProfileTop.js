import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MyProfileTop({ profileData }) {
  const navigate = useNavigate();
  return (
    <>
      <Top>
        <ProfileBox>
          <NickName>{profileData.nickname}</NickName>
        </ProfileBox>
        <ImageBox>
          <img src={profileData.profile_img_url} alt="profileImg" />
        </ImageBox>
      </Top>
      <WriteBox>
        <WriteBtn
          onClick={() => {
            navigate('/write');
          }}
        >
          글쓰기
        </WriteBtn>
      </WriteBox>
    </>
  );
}

export default MyProfileTop;

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

const WriteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
`;

const WriteBtn = styled.div`
  display: block;
  border: 1px solid #2ecac5;
  padding: 10px 20px;
  border-radius: 20px;
  color: #2ecac5;
  cursor: pointer;
`;
