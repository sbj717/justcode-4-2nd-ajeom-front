import React, { useState, useRef, useEffect } from 'react';
import styles from '../Login/Login.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Slider from './Slider';
import { KAKAO_AUTH_URL } from '../../../src/config';

const Login = loginModal => {
  const modalRef = useRef(null);
  const [modal, setModal] = useState(loginModal);

  const clickOutsideModal = async e => {
    if (!modal && (!modalRef.current || !modalRef.current.contains(e.target))) {
      await setModal(!modal);
      await closeBtn();
    }
  };

  const closeBtn = () => {
    setModal(!modal);
  };

  useEffect(() => {
    window.addEventListener('click', clickOutsideModal);
    return () => {
      window.addEventListener('click', clickOutsideModal);
    };
  }, []);

  return (
    modal && (
      <section className={styles.loginOverlay}>
        <section className={styles.loginModal} ref={modalRef}>
          <div className={styles.loginContainer}>
            <Link to="/" className={styles.logo}>
              a
            </Link>
            <Slider />
            <div className={styles.login}>
              <IoMdClose
                className={styles.close}
                onClick={e => {
                  clickOutsideModal(e);
                  closeBtn();
                }}
              />
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
                <Button>내 아점의 카카오계정을 모르겠어요</Button>
                <Button>페이스북 트위터로만 로그인 했었나요?</Button>
                <Link to="" className={styles.link}>
                  아점 로그인 관련 상세 도움말
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  );
};

export default Login;

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
  background-color: ${props => (props.kakao ? '#fee500' : '#fff')};
  cursor: pointer;
  img {
    margin-right: 5px;
  }
`;
