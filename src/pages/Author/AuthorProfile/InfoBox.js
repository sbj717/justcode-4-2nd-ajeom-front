import React from 'react';
import styled from 'styled-components';
function InfoBox({ toggle, profileData }) {
  return (
    <Info className="activeContent">
      <Container>
        <Title>소개</Title>
        <Description>{profileData.description}</Description>
      </Container>
    </Info>
  );
}

export default InfoBox;

const Info = styled.div`
  display: block;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: 0;
    }
  }
`;

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
