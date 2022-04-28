import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { getAuthorList } from '../../../apis/author';

function RecommendedWriter() {
  const [writerList, setWriterList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAuthorList().then(data => setWriterList(data.authorList));
  }, []);

  const writerListLimit = writerList.slice(0, 6);

  return (
    <RecommendedWriterWrapper>
      <BoardTitle>AJEOM WRITERS</BoardTitle>
      <BoardDesc>아점 추천 작가</BoardDesc>
      <Board>
        {writerListLimit.map((i, c) =>
          c < 6 ? (
            <Card key={i.id}>
              <CardButton
                onClick={() => {
                  navigate(`/profile/${i.id}`);
                  window.scrollTo(0, 0);
                }}
              />
              <ImageBox imageUrl={i.profile_img_url} />
              <CardTitle>{i.nickname}</CardTitle>
              <CardBody>{i.description}</CardBody>
            </Card>
          ) : null
        )}
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
  justify-content: flex-start;
  gap: 30px;
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
  word-break: break-all;
  overflow: hidden;
  color: gray;
  height: 100px;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 100;
  line-height: 1.6em;
`;
export default RecommendedWriter;
