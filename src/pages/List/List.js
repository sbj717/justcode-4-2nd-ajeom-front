import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header/Header';
import PostList from './PostList';
import KeywordList from './KeywordList';
import WriterList from './WriterList';
import Spinner from './Spinner';

function List() {
  const [keywordLists, setKeywordLists] = useState({
    keywordList: [{ id: 0, mainKeyword: [] }],
  });
  const [postLists, setPostLists] = useState([]);
  const [writerLists, setWriterLists] = useState({
    recommendedWriter: [{ id: 0, profileImg: '', writer: '' }],
  });
  const [count, setCount] = useState(1);
  const [spinner, setSpinner] = useState(true);

  const target = useRef(null);

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

  useEffect(() => {
    fetch('http://localhost:8000/list/post/1?page=1&pageSize=6')
      .then(res => res.json())
      .then(data => {
        setPostLists(data);
      });
  }, []);

  const fetchData = async () => {
    setTimeout(async () => {
      setCount(count + 1);
      await fetch(`http://localhost:8000/list/post/1?page=${count}&pageSize=6`)
        .then(res => res.json())
        .then(data => {
          if (data !== null) {
            setPostLists(postLists.concat(data));
          } else {
            setSpinner(false);
          }
        });
    }, 700);
  };

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(handleObserver, { threshold: 0.4 });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [postLists]);

  const handleObserver = async ([entry], observer) => {
    console.log(entry);
    if (entry.isIntersecting) {
      await fetchData();
    }
  };

  return (
    <>
      <Header />
      <KeywordWrapper>
        <MainKeyword>IT 트렌드</MainKeyword>
        <KeywordBtnWrapper>
          {keywordLists.keywordList[0].mainKeyword.map(data => (
            <KeywordList key={data.id} data={data} />
          ))}
        </KeywordBtnWrapper>
      </KeywordWrapper>

      <AllListsWrapper>
        <ListCardWrapper>
          {postLists.map(data => (
            <PostList key={data.id} posts={data} />
          ))}
          <SpinnerWrapper>{spinner && <Spinner />}</SpinnerWrapper>
        </ListCardWrapper>

        <WriterCardWrapper>
          <WriterCardTitle>추천작가</WriterCardTitle>
          {writerLists.recommendedWriter.map(data => (
            <WriterList key={data.id} data={data} />
          ))}
        </WriterCardWrapper>
      </AllListsWrapper>
      <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
    </>
  );
}

const KeywordWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 0 1.5rem 0;
  border-bottom: 1px solid #d1d1d1;
`;

const MainKeyword = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 200;
`;

const KeywordBtnWrapper = styled.div`
  display: flex;
`;

const AllListsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: #fbfbfb;
`;

const fadeIn = keyframes`
from {
      opacity: 0;
      transform: translateY(1.5rem);
    }
    to {
      opacity: 1;
      transform: 0;
    }
`;

const ListCardWrapper = styled.section`
  margin-right: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const WriterCardWrapper = styled.section`
  width: 220px;
  height: 22rem;
  padding: 1rem;
  background-color: #ffffff;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

const WriterCardTitle = styled.p`
  color: #666;
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  padding-left: 0.2rem;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default List;
