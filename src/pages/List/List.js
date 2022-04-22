import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';

function List() {
  const [keywordLists, setKeywordLists] = useState({
    keywordList: [{ id: 0, mainKeyword: [] }],
  });

  const [postLists, setPostLists] = useState({
    posts: [{ id: 0, postTitle: '', postText: '', writer: '', postImg: '' }],
  });

  const [writerLists, setWriterLists] = useState({
    recommendedWriter: [{ id: 0, profileImg: '', writer: '' }],
  });

  useEffect(() => {
    fetch('/data/keywords.json')
      .then(res => res.json())
      .then(data => setKeywordLists(data));
  }, []);

  useEffect(() => {
    fetch('/data/listCard.json')
      .then(res => res.json())
      .then(data => setPostLists(data));
  }, []);

  useEffect(() => {
    fetch('/data/writer.json')
      .then(res => res.json())
      .then(data => setWriterLists(data));
  }, []);

  return (
    <>
      <KeywordWrapper>
        <MainKeyword>IT 트렌드</MainKeyword>
        <KeywordBtnWrapper>
          {keywordLists.keywordList[0].mainKeyword.map(data => (
            <Keyword key={data.id}>{data.keyword}</Keyword>
          ))}
        </KeywordBtnWrapper>
      </KeywordWrapper>

      <AllListsWrapper>
        <ListCardWrapper>
          {postLists.posts.map(data => (
            <ListCard key={data.id} posts={data} />
          ))}
        </ListCardWrapper>
        <WriterCardWrapper>
          <WriterCardTitle>추천작가</WriterCardTitle>
          {writerLists.recommendedWriter.map(data => (
            <WriterWrapper key={data.id}>
              <WriterImg src={data.profileImg} />
              <WriterName>{data.writer}</WriterName>
            </WriterWrapper>
          ))}
        </WriterCardWrapper>
      </AllListsWrapper>
    </>
  );
}

const KeywordWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d1d1d1;
`;

const MainKeyword = styled.p`
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 200;
`;

const KeywordBtnWrapper = styled.div`
  display: flex;
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

const AllListsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: #fbfbfb;
`;

const ListCardWrapper = styled.section`
  margin-right: 2rem;
`;

const WriterCardWrapper = styled.section`
  width: 220px;
  height: 22rem;
  padding: 1rem;
  background-color: #ffffff;
`;

const WriterCardTitle = styled.p`
  color: #666;
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  padding-left: 0.2rem;
`;

const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WriterImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.3rem 0.5rem;
  border-radius: 50%;
`;

const WriterName = styled.p`
  color: black;
  font-weight: 300;
  font-size: 0.8rem;
`;

export default List;