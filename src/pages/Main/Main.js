import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import ProfileBookLayout from '../Profile/Brunchbook/ProfileBookLayout';
import Carousel from './Carousel/Carousel';

function Main() {
  return (
    <MainOneWrapper>
      <Header />
      <Carousel />
      <ProfileBookLayout />
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
