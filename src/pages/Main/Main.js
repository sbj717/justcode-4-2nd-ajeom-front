import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AjeomIntro from './AjeomIntro/AjeomIntro';
import Carousel from './Carousel/Carousel';
import KeywordBaord from './KeywordBaord/KeywordBaord';
import RecommendedWriter from './RecommendedWriter/RecommendedWriter';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useScroll } from '../../hooks/useScroll';

function Main() {
  const [navStyle, setNavStyle] = useState(false);
  const scroll = useScroll();

  useEffect(() => {
    scroll > 330 ? setNavStyle(true) : setNavStyle(false);
  }, [scroll]);

  return (
    <>
      <Header navStyle={navStyle} />
      <MainOneWrapper>
        <AjeomIntro />
        <Carousel />
        <KeywordBaord />
        <RecommendedWriter />
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
