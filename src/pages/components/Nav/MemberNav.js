import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { VscBell } from 'react-icons/vsc';

function MemberNav({ showNav, userInfo, refreshLogOut }) {
  const { nickname, profile_img_url } = userInfo;
  const handleLogOut = async () => {
    localStorage.clear();
    await refreshLogOut();
  };

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/profile');
  };
  return (
    <NavWrapper memberNav={showNav === 'memberNav'}>
      <ProfileWrapper>
        <VscBell className="notification" />
        {profile_img_url ? (
          <ProfileImg
            onClick={goToProfile}
            alt="ajeom_logo"
            src={profile_img_url}
          />
        ) : (
          <ProfileImg
            onClick={goToProfile}
            alt="ajeom_logo"
            src="/image/ajeom_logo.png"
          />
        )}
        <Username>{nickname}</Username>
        <UserUrl>ajeom.co.kr/@{nickname}</UserUrl>
        <ButtonWrapper>
          <WriteBtn>
            <Link to="/write">글쓰기</Link>
          </WriteBtn>
          <ApplyAuthor>
            <Link to="/request">작가 신청</Link>
          </ApplyAuthor>
        </ButtonWrapper>
      </ProfileWrapper>
      <ServiceWrapper>
        <MenuWrapper>
          <Menu
            onClick={() => {
              navigate('/profile');
            }}
          >
            내 아점
          </Menu>
          <Menu
            onClick={() => {
              navigate('/drawer');
            }}
          >
            작가의 서랍
          </Menu>
          <Contour />
          <Menu
            onClick={() => {
              navigate('/');
            }}
          >
            아점 홈
          </Menu>
          <Menu
            onClick={() => {
              navigate('/list');
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
          <Menu
            onClick={() => {
              navigate('/');
            }}
          >
            글 읽는 서재
          </Menu>
          <Menu
            onClick={() => {
              navigate('/');
            }}
          >
            피드
          </Menu>
        </MenuWrapper>
        <WriterSupport>
          <WriterSupportLogo
            alt="ajeom_logo"
            src="https://velog.velcdn.com/images/jhsol24/post/801b97b8-63fc-47b4-b4be-f90c84a17295/image.png"
          />
          <WriterSupportText
            onClick={() => {
              navigate('/request');
            }}
          >
            작가-지원 <br /> 프로젝트 보러가기
          </WriterSupportText>
        </WriterSupport>
        <UserButtonWrapper>
          <Setting>설정</Setting>
          <Logout onClick={handleLogOut}>로그아웃</Logout>
        </UserButtonWrapper>
      </ServiceWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 260px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  border-right: 1px solid #e9e9e9;
  margin-left: ${props => (props.memberNav ? '0' : '-260px')};
  transition: all ease 0.5s;
  z-index: 100;
  .notification {
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 22px;
    color: #a0a0a0;
    cursor: pointer;
  }
`;

const ProfileWrapper = styled.div`
  text-align: center;
  padding-bottom: 40px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e9e9e9;
`;

const ProfileImg = styled.img`
  margin: 50px 0 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;
const Username = styled.p`
  font-size: 15px;
  color: #333;
`;

const UserUrl = styled.p`
  padding-top: 10px;
  font-size: 10px;
  font-family: Georgia;
  font-style: italic;
  letter-spacing: 0.3px;
  color: #959595;
`;

const ButtonWrapper = styled.div`
  width: 170px;
  display: inline-flex;
  justify-content: space-between;
`;

const WriteBtn = styled.button`
  width: 80px;
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
  a {
    text-decoration: none;
    color: #00c3bd;
  }
`;

const ApplyAuthor = styled(WriteBtn)``;

const ServiceWrapper = styled.div`
  text-align: center;
  overflow-y: scroll;
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

const Contour = styled.hr`
  width: 140px;
  height: 1px;
  margin: 33px auto 35px;
  border: 0;
  background-color: #f0f0f0;
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
  margin: 0 40px 40px 40px;
  text-align: left;
  border-bottom: 3px solid black;
  font-family: 'Nanum Myeongjo', sans-serif;
  font-size: 15px;
  line-height: 25px;
`;

const UserButtonWrapper = styled(ButtonWrapper)``;

const Setting = styled(WriteBtn)`
  border: 1px solid #bbb;
  color: #959595;
  margin: 0 auto 30px;
`;
const Logout = styled(Setting)``;

export default MemberNav;
