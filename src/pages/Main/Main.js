import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import AjeomIntro from './AjeomIntro/AjeomIntro';
import Carousel from './Carousel/Carousel';
import KeywordBaord from './KeywordBaord/KeywordBaord';

function Main() {
  return (
    <MainOneWrapper>
      <Header />
      <AjeomIntro />
      <Carousel />
      <KeywordBaord />
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
