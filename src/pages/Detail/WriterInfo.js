import React from 'react';
import styled from 'styled-components';

function WriterInfo({ data, goToProfile }) {
  return (
    <>
      <ProfileWrapper>
        <WriterName onClick={goToProfile}>{data.nickname}</WriterName>
        <WriterImg
          alt="작가 프로필 이미지"
          src={data.profile_img_url}
          onClick={goToProfile}
        />
      </ProfileWrapper>
      <WriterDesc onClick={goToProfile}>{data.description}</WriterDesc>
    </>
  );
}

const ProfileWrapper = styled.section`
  position: relative;
  bottom: 20%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const WriterName = styled.p`
  font-size: 1.8rem;
  cursor: pointer;
`;

const WriterImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
`;

const WriterDesc = styled.p`
  margin-bottom: 2rem;
  color: #959595;
  font-size: 0.85rem;
  line-height: 1.5rem;
  cursor: pointer;
`;

export default WriterInfo;
