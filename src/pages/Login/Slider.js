import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slide from './Slide';

const TOTAL_SLIDES = 1;

const Slider = () => {
  const datas = [
    {
      img: process.env.PUBLIC_URL + '/image/slider1.png',
      title: '아점 작가로 데뷔하세요.',
      desc1: '진솔한 에세이부터 업계 전문 지식까지',
      desc2: '당신의 이야기를 세상에 선보이세요.',
    },
    {
      img: process.env.PUBLIC_URL + '/image/slider2.png',
      title: '글로 만나는 작가의 경험',
      desc1: '작가를 구독하고, 새 글을 받아보세요.',
      desc2: '당신에게 영감을 주는 작품을 추천합니다',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <Logo href="/">
        <img
          src={process.env.PUBLIC_URL + '/image/ajeom_logo.png'}
          alt="logo"
        />
      </Logo>
      <SliderContainer ref={slideRef}>
        <Slide
          img={datas[0].img}
          title={datas[0].title}
          desc1={datas[0].desc1}
          desc2={datas[0].desc2}
        />
        <Slide
          img={datas[1].img}
          title={datas[1].title}
          desc1={datas[1].desc1}
          desc2={datas[1].desc2}
        />
      </SliderContainer>
      <ButtonBox>
        <Button onClick={prevSlide}>
          <FaAngleLeft />
        </Button>
        <Button onClick={nextSlide}>
          <FaAngleRight />
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default Slider;
const Container = styled.div`
  width: 50%;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 90%;
  gap: 5%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  gap: 20px;
`;

const Logo = styled.a`
  position: absolute;
  left: 100px;
  top: 80px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
