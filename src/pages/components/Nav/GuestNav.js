import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../Login/Login';

function GuestNav({ showNav }) {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);

  const loginPopUp = () => {
    setLoginModal(!loginModal);
  };
  return (
    <>
      {loginModal && <Login LoginModal={loginModal} />}
      <NavWrapper guestNav={showNav === 'guestNav'}>
        <StartWrapper>
          <Logo
            alt="ajeom_logo"
            src="https://velog.velcdn.com/images/jhsol24/post/801b97b8-63fc-47b4-b4be-f90c84a17295/image.png"
          />
          <Slogan>
            You can make anything <br /> by coding
          </Slogan>
          <SloganWriter>- J.J.Cho -</SloganWriter>
          <StartService onClick={loginPopUp}>아점 시작하기</StartService>
        </StartWrapper>
        <ServiceWrapper>
          <MenuWrapper>
            <Menu
              onClick={() => {
                navigate('/');
              }}
            >
              아점 홈
            </Menu>
            <Menu
              onClick={() => {
                navigate('/');
              }}
            >
              아점 나우
            </Menu>
            <Menu
              onClick={() => {
                navigate('/book');
              }}
            >
              아점 책방
            </Menu>
          </MenuWrapper>
          <WriterSupport>
            <WriterSupportLogo
              alt="ajeom_logo"
              src="https://velog.velcdn.com/images/jhsol24/post/801b97b8-63fc-47b4-b4be-f90c84a17295/image.png"
            />
            <WriterSupportText>
              작가-지원 <br /> 프로젝트 보러가기
            </WriterSupportText>
          </WriterSupport>
          <FindUser>계정을 잊어버리셨나요?</FindUser>
        </ServiceWrapper>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.section`
  position: fixed;
  width: 260px;
  margin-left: 0rem;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  border-right: 1px solid #e9e9e9;
  margin-left: ${props => (props.guestNav ? '0' : '-260px')};
  transition: all ease 0.5s;
  z-index: 10;
`;

const StartWrapper = styled.div`
  text-align: center;
  padding-bottom: 40px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e9e9e9;
`;

const Logo = styled.img`
  margin: 40px 0 10px;
  width: 18%;
`;

const Slogan = styled.p`
  font-size: 13px;
  font-family: Georgia;
  font-style: italic;
  line-height: 1.35;
  margin-bottom: 5px;
  line-height: 17px;
  color: #666666;
`;

const SloganWriter = styled.p`
  padding-top: 3px;
  font-size: 10px;
  font-family: Georgia;
  font-style: italic;
  letter-spacing: 0.3px;
  color: #959595;
`;

const StartService = styled.button`
  width: 120px;
  padding: 5px;
  margin-top: 15px;
  border-radius: 16px;
  border: 1px solid #00c3bd;
  font-size: 13px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  color: #00c3bd;
  background-color: #fff;
  cursor: pointer;
`;

const ServiceWrapper = styled.div`
  text-align: center;
`;

const MenuWrapper = styled.ul`
  padding-top: 30px;
`;

const Menu = styled.li`
  display: flex;
  flex-basis: 100%;
  line-height: 10px;
  padding: 14px 0;
  width: 240px px;
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  cursor: pointer;
  &:before {
    content: '';
    flex-grow: 1;
    margin: 5px 12px 0 40px;
    background-color: transparent;
    height: 1px;
    font-size: 0;
    line-height: 0;
  }
  &:after {
    content: '';
    flex-grow: 1;
    margin: 5px 40px 0 12px;
    background-color: transparent;
    height: 1px;
    font-size: 0;
    line-height: 0;
  }
  &:hover {
    color: #00c3be;
    &:before {
      background-color: #00c3be;
    }
    &:after {
      background-color: #00c3be;
    }
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #00c3be;
    }
  }
`;

const WriterSupport = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriterSupportLogo = styled.img`
  padding: 40px 0 0 0;
  margin-left: 170px;
  width: 8%;
`;

const WriterSupportText = styled.div`
  padding: 0 20px 10px 15px;
  margin: 0 50px 40px 50px;
  text-align: left;
  border-bottom: 3px solid black;
  font-family: 'Nanum Myeongjo', sans-serif;
  font-size: 15px;
  line-height: 25px;
`;

const FindUser = styled.div`
  font-size: 13px;
  color: #959595;
  text-decoration: underline;
  cursor: pointer;
`;

export default GuestNav;
