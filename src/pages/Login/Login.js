<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> develop
import styles from '../Login/Login.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
<<<<<<< HEAD

function Login() {
  const Button = styled.button`
    display: block;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #333;
=======
import Slider from './Slider';
import { KAKAO_AUTH_URL } from './OAuth';

function Login() {
  const Button = styled.a`
    display: block;
    width: 100%;
    padding: 20px 0;
    border-radius: 12px;
    outline: none;
    border: none;
    text-align: center;
    font-size: 16px;
    color: #333;
    text-decoration: none;
>>>>>>> develop
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
<<<<<<< HEAD
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
            {/* <div className={styles.sliderItem}>
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
            </div> */}
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
=======
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.logo}>
            a
          </Link>
          <Slider />
          <div className={styles.login}>
            <IoMdClose className={styles.close} />
            <div className={styles.kakaologinBox}>
              <span>아점 시작하기</span>
              <Button href={KAKAO_AUTH_URL} kakao>
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
>>>>>>> develop
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
