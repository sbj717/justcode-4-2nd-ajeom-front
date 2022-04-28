import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function WriterList({ data }) {
  const navigate = useNavigate();

  const goToAuthorProfile = () => {
    navigate(`/profile/${data.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <WriterWrapper key={data.id} onClick={goToAuthorProfile}>
      <WriterImg src={data.profile_img_url} />
      <WriterName>{data.nickname}</WriterName>
    </WriterWrapper>
  );
}

const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const WriterImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.3rem 0.5rem;
  border-radius: 50%;
`;

const WriterName = styled.p`
  color: black;
  font-weight: 300;
  font-size: 0.8rem;
`;

export default WriterList;
