import React from 'react';
import styled from 'styled-components';

function Request() {
  return (
    <BgColor>
      <SideTitleWrapper>
        <SideTitle>
          브런치
          <br />
          작가를 애타게 <br />
          찾고 있습니다.
        </SideTitle>
        <VerticalLine />
        <SideTitleRotate>작가신청서</SideTitleRotate>
      </SideTitleWrapper>
    </BgColor>
  );
}

const BgColor = styled.article`
  position: relative;
  min-width: 1000px;
  min-height: 750px;
  background-color: #eaeaea;
`;

const SideTitleWrapper = styled.section`
  padding: 2rem 0 0 2rem;
  color: #666666;
  font-family: 'Nanum Myeongjo';
`;

const SideTitle = styled.p`
  margin-bottom: 1rem;
`;

const VerticalLine = styled.div`
  height: 4rem;
  border-left: 1.5px solid #666;
`;

const SideTitleRotate = styled.div`
  display: inline-block;
  transform: rotate(90deg);
  transform-origin: 0 100%;
`;

export default Request;
