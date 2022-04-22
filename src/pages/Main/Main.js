import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Carousel from './Carousel/Carousel';

function Main() {
  return (
    <MainOneWrapper>
      <Header />
      <Carousel />
    </MainOneWrapper>
  );
}

export default Main;

const MainOneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
`;
