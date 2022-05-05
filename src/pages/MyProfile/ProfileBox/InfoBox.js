import React from 'react';
import styled from 'styled-components';

function InfoBox({ toggle, profileData, target }) {
  return (
    <Info>
      <Container>
        <Title>소개</Title>
        <Description>{profileData.description}</Description>
        <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
      </Container>
    </Info>
  );
}

const Info = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.p`
  display: block;
  font-size: 12px;
`;

const Description = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;
export default InfoBox;
