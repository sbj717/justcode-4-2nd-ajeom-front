import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import AjeomIntro from './AjeomIntro/AjeomIntro';
import Carousel from './Carousel/Carousel';
import KeywordBaord from './KeywordBaord/KeywordBaord';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <>
      <Header />
      <MainOneWrapper>
        <AjeomIntro />
        <Carousel />
        <KeywordBaord />
      </MainOneWrapper>
      <Footer />
    </>
  );
}

export default Main;

const MainOneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
