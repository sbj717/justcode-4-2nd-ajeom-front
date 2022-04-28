import React from 'react';
import styled from 'styled-components';

function WriterList({ data }) {
  return (
    <WriterWrapper key={data.id}>
      {data.profile_img_url ? (
        <WriterImg src={data.profile_img_url} />
      ) : (
        <WriterImg src="/image/ajeom_logo2.png" />
      )}
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
