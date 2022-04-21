import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Detail() {
  const [postLists, setPostLists] = useState({
    posts: [
      {
        id: 0,
        postTitle: '',
        postSubTitle: '',
        postText: '',
        writer: '',
        postImg: '',
        thumbnailUrl: '',
      },
    ],
  });

  const [keywordLists, setKeywordLists] = useState({
    keywordList: [{ id: 0, mainKeyword: [] }],
  });

  const [writerLists, setWriterLists] = useState({
    recommendedWriter: [{ id: 0, profileImg: '', writer: '' }],
  });

  const fillteredWriter = writerLists.recommendedWriter.filter(
    el => el.id === 1
  );

  useEffect(() => {
    fetch('/data/detail.json')
      .then(res => res.json())
      .then(data => setPostLists(data));
  }, []);

  useEffect(() => {
    fetch('/data/keywords.json')
      .then(res => res.json())
      .then(data => setKeywordLists(data));
  }, []);

  useEffect(() => {
    fetch('/data/writer.json')
      .then(res => res.json())
      .then(data => setWriterLists(data));
  }, []);

  return (
    <>
      {postLists.posts.map(data => (
        <TumbnailWrapper key={data.id} thumbnailUrl={data.thumbnailUrl}>
          <DetailTitle>
            {data.postTitle}
            <DetailSubTitle>{data.postSubTitle}</DetailSubTitle>
            <DetailWriter>
              <By>by</By>
              {data.writer}
            </DetailWriter>
          </DetailTitle>
        </TumbnailWrapper>
      ))}

      <MainBody>
        <BodyWrapper>
          <Ajeombody />
          <KeywordBtnWrapper>
            {keywordLists.keywordList[0].mainKeyword.map(data => (
              <Keyword key={data.id}>{data.keyword}</Keyword>
            ))}
          </KeywordBtnWrapper>
        </BodyWrapper>
      </MainBody>

      <WriterWrapper>
        <WriterSubWrapper>
          {fillteredWriter.map(data => (
            <WriterName key={data.id}>{data.writer}</WriterName>
          ))}
        </WriterSubWrapper>
      </WriterWrapper>
    </>
  );
}

const TumbnailWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${props => props.thumbnailUrl});
  background-repeat: no-repeat; //이미지 크기가 기준보다 더 작을 때라도 반복하지 않는다.
  background-size: cover; //지정한 요소를 다 덮도록 배경이미지를 확대/축소
  background-position: center center; //이미지의 정가운데를 표시
  background-attachment: fixed;
  width: 100%;
  height: 33rem;
`;

const DetailTitle = styled.h1`
  position: fixed;
  width: 700px;
  color: #ffffff;
  font-family: 'Nanum Myeongjo';
  font-size: 2.5rem;
  line-height: 3rem;
  margin-top: 15rem;
`;

const DetailSubTitle = styled.div`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 200;
`;

const DetailWriter = styled(DetailSubTitle)`
  font-size: 0.8rem;
  padding-top: 3rem;
`;

const By = styled.span`
  font-family: Georgia;
  font-style: italic;
  margin-right: 0.3rem;
`;

const MainBody = styled.section`
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.section`
  width: 700px;
`;

const Ajeombody = styled.div`
  height: 50rem;
`;

const KeywordBtnWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Keyword = styled.button`
  margin: 0 0.5rem;
  padding: 0.2rem 0.7rem;
  color: #959595;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 200;
  cursor: pointer;
`;

const WriterWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  color: #333333;
  height: 10rem;
`;

const WriterSubWrapper = styled.div`
  width: 700px;
  font-weight: 300;
  margin-top: 2.5rem;
`;

const WriterName = styled.p`
  font-size: 2rem;
`;

export default Detail;
