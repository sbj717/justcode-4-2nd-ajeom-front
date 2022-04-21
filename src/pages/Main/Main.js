import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';

function Main() {
  return (
    <MainOneWrapper>
      <Carousel />
    </MainOneWrapper>
  );
}

export default Main;

const MainOneWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;
