import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawerPostCard from './DrawerPostCard';
import DrawerBookCard from './DrawerBookCard';
import EmptyBookCard from './EmptyBookCard';
import Spinner from '../List/Spinner';
import Header from '../components/Header/Header';
import { BASE_URL } from '../../config';
function DrawerLayout() {
  const [categoryDeco, setCategoryDeco] = useState(['picked', 'none']);
  const [page, setPage] = useState('post');
  const [postList, setPostList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [count, setCount] = useState(2);
  const [spinner, setSpinner] = useState(true);

  const goToPost = () => {
    setCategoryDeco(['picked', 'none']);
    setPage('post');
  };

  const goToBook = () => {
    setCategoryDeco(['none', 'picked']);
    setPage('book');
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${BASE_URL}/list/drawer?page=1&pageSize=5`, {
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(res => setPostList(res));
  }, [token]);

  const fetchPostList = async () => {
    setTimeout(async () => {
      setCount(count + 1);
      await fetch(`${BASE_URL}/list/drawer?page=${count}&pageSize=5`, {
        headers: { 'Content-Type': 'application/json', token: token },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res !== null) {
            setPostList(postList.concat(res));
          } else {
            setSpinner(false);
          }
        });
    }, 700);
  };

  const target = useRef(null);

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(handleObserver, { threshold: 0.4 });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [postList]);

  const handleObserver = async ([entry], observer) => {
    if (entry.isIntersecting) {
      await fetchPostList();
    }
  };

  useEffect(() => {
    fetch(`${BASE_URL}/user/authorBookList`, {
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(res => {
        setBookList(res);
      });
  }, [token]);

  return (
    <>
      <Header />
      <DrawerWrapper>
        <DrawerCategory>
          <p className={categoryDeco[0]} onClick={goToPost}>
            저장글
          </p>
          <p className={categoryDeco[1]} onClick={goToBook}>
            브런치북
          </p>
        </DrawerCategory>
        <DrawerBanner>
          <img src="/images/drawerbanner.png" alt="" />
        </DrawerBanner>
        {page === 'post' && postList !== null && (
          <PostListWrapper>
            {postList.map(card => (
              <DrawerPostCard key={card.id} card={card} />
            ))}
            <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
            <SpinnerWrapper>{spinner && <Spinner />}</SpinnerWrapper>
          </PostListWrapper>
        )}
        {page === 'book' && (
          <BookListWrapper>
            <BookListContainer>
              <EmptyBookCard />
              {bookList.map(card => (
                <DrawerBookCard key={card.id} card={card} />
              ))}
            </BookListContainer>
          </BookListWrapper>
        )}
      </DrawerWrapper>
    </>
  );
}

export default DrawerLayout;

const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const DrawerCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  z-index: 20;
  p {
    font-size: 18px;
    font-weight: 100;
    padding: 5px 0px;
    margin: 0px 10px;
    cursor: pointer;
  }
  .picked {
    color: #00c3bd;
    border-bottom: 2px solid #00c3bd;
  }
`;

const DrawerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  width: 100%;
  height: 100px;
  cursor: pointer;
  img {
    width: 700px;
  }
`;

const PostListWrapper = styled.div`
  width: 700px;
  margin-top: 35px;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const BookListWrapper = styled.div`
  width: 700px;
`;

const BookListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 735px;
`;
