import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function RecommendedWriter() {
  const [writerList, setWriterList] = useState([]);

  useEffect(() => {
    fetch('/data/profile.json')
      .then(res => res.json())
      .then(data => setWriterList(data));
  }, []);

  return (
    <RecommendedWriterWrapper>
      <BoardTitle>AJEOM WRITERS</BoardTitle>
      <BoardDesc>아점 추천 작가</BoardDesc>
      <Board>
        {writerList.map(i => {
          return (
            <Card>
              <CardButton></CardButton>
              <ImageBox imageUrl={i.profile_img_url}></ImageBox>
              <CardTitle>{i.username}</CardTitle>
              <CardBody>{i.description}</CardBody>
            </Card>
          );
        })}
      </Board>
    </RecommendedWriterWrapper>
  );
}
const CardButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  ${props => {
    return css`
      background-image: url(${"'" + props.imageUrl + "'"});
    `;
  }}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const RecommendedWriterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(249, 249, 249);
  margin-top: 130px;
  width: 100%;
`;
const BoardTitle = styled.h3`
  width: 266px;
  margin-top: 120px;
  text-align: center;
  font-family: 'Amiri', serif;
  letter-spacing: 7px;
  font-size: 18px;
`;
const BoardDesc = styled.div`
  width: 149px;
  margin-top: 17px;
  text-align: center;
  font-size: 11px;
  color: #bebfbf;
  font-weight: 500;
`;
const Board = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 150px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 30px;
  background-color: white;
  padding: 40px;
`;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 100;
  font-family: 'Nanum Myeongjo', serif;
`;
const CardBody = styled.div`
  color: gray;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 100;
  line-height: 1.6em;
`;
export default RecommendedWriter;
