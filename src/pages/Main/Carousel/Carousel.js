import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscArrowRight } from 'react-icons/vsc';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonVisible, setButtonVisible] = useState([false, true]);
  const [buttonDeco, setButtonDeco] = useState([
    'picked',
    'none',
    'none',
    'none',
    'none',
  ]);

  const leftButtonClick = () => {
    currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(0);
  };

  const rightButtonClick = () => {
    currentSlide < 3 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(4);
  };

  const slideDistance = currentSlide * -960;

  useEffect(() => {
    const newButtonDeco = ['none', 'none', 'none', 'none', 'none'];
    newButtonDeco[currentSlide] = 'picked';
    setButtonDeco(newButtonDeco);

    if (currentSlide === 4) {
      setButtonVisible([true, false]);
    } else if (currentSlide === 0) {
      setButtonVisible([false, true]);
    } else {
      setButtonVisible([true, true]);
    }
  }, [currentSlide]);

  const goToSlideOne = () => {
    setCurrentSlide(0);
  };

  const goToSlideTwo = () => {
    setCurrentSlide(1);
  };

  const goToSlideThree = () => {
    setCurrentSlide(2);
  };

  const goToSlideFour = () => {
    setCurrentSlide(3);
  };

  const goToSlideFive = () => {
    setCurrentSlide(4);
  };

  return (
    <CarouselWrapper>
      <CarouselContainer
        style={{ transform: `translateX(${slideDistance}px)` }}
      >
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
      </CarouselContainer>
      {buttonVisible[0] && (
        <LeftButtonWrapper>
          <button onClick={leftButtonClick}>
            <VscArrowLeft />
          </button>
        </LeftButtonWrapper>
      )}
      {buttonVisible[1] && (
        <RightButtonWrapper>
          <button onClick={rightButtonClick}>
            <VscArrowRight />
          </button>
        </RightButtonWrapper>
      )}
      <CarouselNav>
        <button className={buttonDeco[0]} onClick={goToSlideOne}>
          01
        </button>
        <button className={buttonDeco[1]} onClick={goToSlideTwo}>
          02
        </button>
        <button className={buttonDeco[2]} onClick={goToSlideThree}>
          03
        </button>
        <button className={buttonDeco[3]} onClick={goToSlideFour}>
          04
        </button>
        <button className={buttonDeco[4]} onClick={goToSlideFive}>
          05
        </button>
      </CarouselNav>
    </CarouselWrapper>
  );
}

export default Carousel;

const CarouselWrapper = styled.div`
  width: 960px;
  height: 570px;
  display: flex;
  position: relative;
  margin: 50px 0px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 4800px;
  height: 520px;
  transition: ease 0.5s;
`;

const LeftButtonWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 210px;
  left: 30px;
  button {
    width: 100px;
    height: 100px;
    border: 0px;
    border-radius: 50px;
    background-color: white;
    font-size: 72px;
    color: gray;
    opacity: 70%;
    cursor: pointer;
  }
`;

const RightButtonWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 210px;
  right: 30px;
  button {
    width: 100px;
    height: 100px;
    border: 0px;
    border-radius: 50px;
    background-color: white;
    font-size: 72px;
    color: gray;
    opacity: 70%;
    cursor: pointer;
  }
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  width: 960px;
  position: absolute;
  top: 535px;
  button {
    border: 0px;
    background-color: transparent;
    font-size: 11px;
    font-weight: 700;
    padding: 6px;
    margin: 0px 6px;
    cursor: pointer;
  }
  .picked {
    text-decoration: underline;
    font-size: 13px;
  }
`;
