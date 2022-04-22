import React from 'react';
import styled from 'styled-components';

function AjeomIntro() {
  return (
    <IntroWrapper>
      <IntroTextWrapper>
        <AjeomTitle>
          글이 작품이 되는 공간, 아점
          <AjeomLogo
            alt="ajeom_logo"
            src="https://velog.velcdn.com/images/jhsol24/post/801b97b8-63fc-47b4-b4be-f90c84a17295/image.png"
          />
        </AjeomTitle>
        <AjeomDesc>
          브런치에 담긴 아름다운 작품을 감상해 보세요.
          <br />
          그리고 다시 꺼내 보세요.
          <br />
          <AjeomBottomText>서랍 속 간직하고 있는 글과 감성을.</AjeomBottomText>
        </AjeomDesc>
      </IntroTextWrapper>
      <Notice>
        <UpdateInfo>글쓰기 약속 알림 기능 추가 안내</UpdateInfo>
        <UpdateIcon>Update</UpdateIcon>
      </Notice>
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroTextWrapper = styled.div`
  width: 960px;
`;

const AjeomTitle = styled.div`
  font-size: 40px;
  font-weight: 400;
  font-family: 'Nanum Myeongjo', sans-serif;
  color: #1a1a1a;
  text-align: left;
  letter-spacing: -0.05em;
  margin: 10px 0;
`;

const AjeomLogo = styled.img`
  position: relative;
  left: 10px;
  top: -15px;
  width: 28px;
`;

const AjeomDesc = styled.div`
  font-size: 32px;
  line-height: 46px;
  font-family: 'Nanum Myeongjo', sans-serif;
  color: #cacaca;
  letter-spacing: -0.05em;
  padding-bottom: 16px;
`;

const AjeomBottomText = styled.div`
  font-family: 'Nanum Myeongjo', sans-serif;
  color: #dedede;
`;

const Notice = styled.div`
  width: 960px;
`;

const UpdateIcon = styled.span`
  float: right;
  font-size: 11px;
  font-family: Georgia, sans-serif;
  font-style: italic;
  color: #00c3bd;
  padding-top: 2px;
`;

const UpdateInfo = styled.span`
  float: right;
  padding-left: 7px;
  font-size: 12px;
  color: #959595;
`;

export default AjeomIntro;
