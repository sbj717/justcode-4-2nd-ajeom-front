import React from 'react';
import styles from '../Login/Login.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Slider from './Slider';
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
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.logo}>
            a
          </Link>
          <Slider />
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
        </div>
      </section>
    </>
  );
}

export default Login;
