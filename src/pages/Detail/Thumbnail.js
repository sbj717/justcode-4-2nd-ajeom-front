import React from 'react';
import styled from 'styled-components';

function Thumbnail({ data }) {
  return (
    <ThumbnailWrapper thumbnailUrl={data.thumbnail_url}>
      <TitleWrapper>
        <DetailTitle>
          {data.title}
          <DetailSubTitle>{data.subtitle}</DetailSubTitle>
          <DetailWriter>
            <By>by</By>
            {data.nickname}
          </DetailWriter>
        </DetailTitle>
      </TitleWrapper>
    </ThumbnailWrapper>
  );
}

const ThumbnailWrapper = styled.section`
  position: relative;
  height: 33rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url(${props => props.thumbnailUrl});
  background-repeat: no-repeat; //이미지 크기가 기준보다 더 작을 때라도 반복하지 않는다.
  background-size: cover; //지정한 요소를 다 덮도록 배경이미지를 확대/축소
  background-position: center center; //이미지의 정가운데를 표시
  background-attachment: fixed;
  z-index: -10;
`;

const TitleWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 90;
`;

const DetailTitle = styled.h1`
  position: fixed;
  width: 700px;
  margin-top: 15rem;
  color: #ffffff;
  font-family: 'Nanum Myeongjo';
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3rem;
  z-index: -1;
`;

const DetailSubTitle = styled.div`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 200;
  z-index: -1;
`;

const DetailWriter = styled(DetailSubTitle)`
  position: relative;
  padding-top: 3rem;
  font-size: 0.8rem;
  z-index: -1;
`;

const By = styled.span`
  margin-right: 0.3rem;
  font-family: Georgia;
  font-style: italic;
`;

export default Thumbnail;
