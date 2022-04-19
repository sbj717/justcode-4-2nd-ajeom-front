import React, { useState, useRef } from 'react';
import styles from '../Login/Login.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Login() {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const Button = styled.button`
    display: block;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #333;
    background-color: ${props => (props.kakao ? '#fee500' : '#fff')};
    cursor: pointer;
    img {
      margin-right: 5px;
    }
  `;

  return (
    <>
      <section className={styles.loginWrapper} />
      <section className={styles.loginModal}>
        <div className={styles.sliderBox}>
          <Link to="/" className={styles.logo}>
            <img
              src={process.env.PUBLIC_URL + '/image/ajeom_logo.png'}
              alt="logo"
            />
          </Link>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderItem}>
              <figure className={styles.sliderImg}>
                <img
                  src={process.env.PUBLIC_URL + '/image/slider1.png'}
                  alt="sliderImage"
                />
              </figure>
              <div className={styles.title}>아점 작가로 데뷔하세요.</div>
              <div className={styles.cont}>
                <span>진솔한 에세이부터 업계 전문 지식까지, </span>
                <span>당신의 이야기를 세상에 선보이세요. </span>
              </div>
            </div>
            <div className={styles.sliderItem}>
              <figure className={styles.sliderImg}>
                <img
                  src={process.env.PUBLIC_URL + '/image/slider2.png'}
                  alt="sliderImage"
                />
              </figure>
              <div className={styles.title}>글로 만나는 작가의 경험</div>
              <div className={styles.cont}>
                <span>작가를 구독하고, 새 글을 받아보세요.</span>
                <span>당신에게 영감을 주는 작품을 추천합니다.</span>
              </div>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <FaAngleLeft className={styles.arrowLeft} />
            <FaAngleRight className={styles.arrowRight} />
          </div>
        </div>
        <div className={styles.login}>
          <IoMdClose className={styles.close} />
          <div className={styles.kakaologinBox}>
            <span>아점 시작하기</span>
            <Button kakao>
              <img
                src={process.env.PUBLIC_URL + '/image/kakaotalk.png'}
                alt=""
              />
              카카오로 계정 시작하기
            </Button>
          </div>
          <div className={styles.findBox}>
            <span>내 아점 찾기</span>
            <Button>내 브런치의 카카오계정을 모르겠어요</Button>
            <Button>페이스북 트위터로만 로그인 했었나요?</Button>
            <Link to="" className={styles.link}>
              브런치 로그인 관련 상세 도움말
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
