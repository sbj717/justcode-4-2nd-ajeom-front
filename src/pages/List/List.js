import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Keyword from './Keyword';
import PostList from './PostList';
import WriterList from './WriterList';
import Spinner from './Spinner';
import Header from '../components/Header/Header';
import { useScroll } from '../../hooks/useScroll';
import { getRelatedKeywords } from '../../apis/keyword';
import { getAuthorList } from '../../apis/author';
import { BASE_URL } from '../../config';

function List() {
  const params = useParams();
  const keywordId = params.id;

  const [navStyle, setNavStyle] = useState(false);
  const scroll = useScroll();

  const [keywordList, setKeywordList] = useState({
    selectedKeyword: [{ id: 0, name: '' }],
    relatedKeywords: [{ id: 0, name: '' }],
  });
  const [count, setCount] = useState(1);
  const [spinner, setSpinner] = useState(true);
  const [postLists, setPostLists] = useState([]);
  const [writerList, setWriterList] = useState([]);

  //intersection observer를 위한 타겟
  const target = useRef(null);

  //scrollY값에 따른 Header style 변화
  useEffect(() => {
    scroll > 190 ? setNavStyle(true) : setNavStyle(false);
  }, [scroll]);

  //키워드 fetch
  useEffect(() => {
    getRelatedKeywords(keywordId).then(data => setKeywordList(data));
  }, [keywordId, params.id]);

  //추천 작가 리스트 fetch
  useEffect(() => {
    getAuthorList().then(data => setWriterList(data.authorList));
  }, []);

  const writerListLimit = writerList.slice(0, 6);

  //발행 글 리스트에서 무한 스크롤을 위한 API Fetch
  useEffect(() => {
    fetch(`${BASE_URL}/list/post/${keywordId}?page=1&pageSize=6`)
      .then(res => res.json())
      .then(data => {
        setPostLists(data);
      });
  }, [keywordId, params.id]);

  const fetchData = async () => {
    setTimeout(async () => {
      setCount(count + 1);
      await fetch(`${BASE_URL}/list/post/${keywordId}?page=${count}&pageSize=6`)
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

  //Intersection Observer API
  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(handleObserver, { threshold: 0.4 });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [postLists]);

  const handleObserver = async ([entry]) => {
    if (entry.isIntersecting) {
      await fetchData();
    }
  };

  return (
    <>
      <Header navStyle={navStyle} />
      <KeywordWrapper>
        <MainKeyword>{keywordList.selectedKeyword[0].name}</MainKeyword>
        <KeywordBtnWrapper>
          {keywordList.relatedKeywords.map(data => (
            <Keyword key={data.id} data={data} />
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
          {writerListLimit.map(data => (
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

const ListCardWrapper = styled.section``;

const WriterCardWrapper = styled.section`
  width: 220px;
  height: 22rem;
  padding: 1rem;
  background-color: #ffffff;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

const WriterCardTitle = styled.p`
  margin-bottom: 0.5rem;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.8rem;
  font-weight: 300;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default List;
