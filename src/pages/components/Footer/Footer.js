import React from 'react';
import styled from 'styled-components';
import { DiApple } from 'react-icons/di';

function Footer() {
  return (
    <FooterBackground>
      <FooterWrapper>
        <LogoWrapper>
          <AjeomLogo alt="ajeom_white_logo" src="/image/logo_white.png" />
          <AjeomSlogan>
            You can make anything <br /> by coding
          </AjeomSlogan>
          <SloganWriter>- J.J.Cho -</SloganWriter>
        </LogoWrapper>

        <LinkInfoWrapper>
          <LinkInfo>아점 이용안내</LinkInfo>
          <LinkInfo>작가신청</LinkInfo>
          <LinkInfo>작가 지원 프로젝트</LinkInfo>
          <LinkInfo>제휴제안</LinkInfo>
          <LinkInfo>고객센터</LinkInfo>
        </LinkInfoWrapper>

        <LinkInfoWrapper>
          <LinkInfo>이용약관</LinkInfo>
          <LinkInfo>이전 이용약관</LinkInfo>
          <LinkInfo style={{ color: '#ffffff' }}>
            카카오 개인정보 처리방침
          </LinkInfo>
          <LinkInfo>청소년 보호정책</LinkInfo>
          <LinkInfo>운영정책</LinkInfo>
        </LinkInfoWrapper>

        <LinkInfoWrapper>
          <LinkInfo>아점팀 공지사항</LinkInfo>
          <LinkInfo>아점 카카오톡 채널</LinkInfo>
          <LinkInfo>아점 인스타그램</LinkInfo>
          <LinkInfo>아점 페이스북</LinkInfo>
        </LinkInfoWrapper>
      </FooterWrapper>

      <BottomFooter>
        <KakaoCorp>© KakaoCorp</KakaoCorp>
        <BottomLogoWrapper>
          <GooglePlayLogo
            alt="google_play_logo"
            src="/image/google_play_logo.png"
          />
          <DiApple color="#fff" size="28" />
        </BottomLogoWrapper>
      </BottomFooter>
    </FooterBackground>
  );
}

const FooterBackground = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.3rem 0;
  margin-top: 0rem;
  background-color: #101010;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  width: 960px;
  color: white;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoWrapper = styled.section`
  width: 20rem;
`;

const AjeomLogo = styled.img`
  width: 2rem;
  margin-bottom: 1rem;
`;

const AjeomSlogan = styled.div`
  font-family: Georgia;
  font-style: italic;
  line-height: 1.35;
`;

const SloganWriter = styled.p`
  padding-top: 0.6rem;
  font-size: 0.8rem;
  font-family: Georgia;
  font-style: italic;
  letter-spacing: 0.1rem;
  color: #959595;
`;

const LinkInfoWrapper = styled.section``;

const LinkInfo = styled.p`
  margin-bottom: 1.5rem;
  color: #d9d9d9;
  font-weight: 200;
  font-size: 0.8rem;
  cursor: pointer;
`;

const BottomFooter = styled.section`
  width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.2rem;
`;

const KakaoCorp = styled.div`
  font-style: italic;
  font-family: Georgia, sans-serif;
  font-size: 0.7rem;
  color: #fff;
  opacity: 0.5;
`;

const BottomLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const GooglePlayLogo = styled.img`
  width: 1.5rem;
`;

export default Footer;
