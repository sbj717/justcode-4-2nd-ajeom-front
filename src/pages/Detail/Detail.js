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
    recommendedWriter: [{ id: 0, profileImg: '', writer: '', description: '' }],
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
            <>
              <ProfileWrapper key={data.id}>
                <WriterName>{data.writer}</WriterName>
                <WriterImg src={data.profileImg} />
              </ProfileWrapper>
              <WriterDesc>{data.description}</WriterDesc>
            </>
          ))}
          <BtnWrapper>
            <Proposition>제안하기</Proposition>
            <Subscription>구독하기</Subscription>
          </BtnWrapper>
        </WriterSubWrapper>
      </WriterWrapper>

      <NavBottom>
        <NavWrapper>
          <Prev>작가의 이전글</Prev>
          <PrevPost>안녕하세요</PrevPost>
        </NavWrapper>
        <NavWrapper>
          <NextPost>반갑습니다</NextPost>
          <Next>작가의 다음글</Next>
        </NavWrapper>
      </NavBottom>
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
  z-index: 1;
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
  margin: 7rem 0 4rem 0;
  z-index: 2;
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
  z-index: 2;
  cursor: pointer;
`;

const WriterWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  color: #333333;
`;

const WriterSubWrapper = styled.div`
  width: 700px;
  font-weight: 200;
  margin-bottom: 2rem;
`;

const ProfileWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  bottom: 20%;
`;

const WriterName = styled.p`
  font-size: 1.8rem;
  z-index: 2;
`;

const WriterImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

const WriterDesc = styled.p`
  color: #959595;
  line-height: 1.5rem;
  font-size: 0.85rem;
  margin-bottom: 2rem;
`;

const BtnWrapper = styled.section`
  float: right;
  margin-bottom: 2rem;
`;

const Proposition = styled.button`
  width: 5rem;
  border: 1px solid #bbb;
  border-radius: 3rem;
  color: #666;
  background: #fff;
  padding: 0.4rem 0;
  font-weight: 200;
  margin-left: 0.7rem;
`;

const Subscription = styled(Proposition)`
  border: 1px solid #00c3bd;
  color: #00c3bd;
`;

const NavBottom = styled.section`
  position: sticky;
  bottom: 0;
  padding: 1.4rem 0;
  border-top: 1px solid #eee;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  color: #333333;
  font-weight: 200;
`;

const Prev = styled.div`
  color: #959595;
  font-size: 0.8rem;
  margin-left: 3rem;
`;

const PrevPost = styled.div`
  color: #333333;
  margin-left: 1rem;
`;

const NextPost = styled(PrevPost)`
  margin-right: 1rem;
`;

const Next = styled(Prev)`
  margin: 0 3rem 0 0;
`;

export default Detail;
