import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DrawerPostCard from './DrawerPostCard';
import DrawerBookCard from './DrawerBookCard';
import EmptyBookCard from './EmptyBookCard';
import { useNavigate } from 'react-router-dom';

function DrawerLayout() {
  const [categoryDeco, setCategoryDeco] = useState(['picked', 'none']);
  const [page, setPage] = useState('post');
  const [postList, setPostList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const goToPost = () => {
    setCategoryDeco(['picked', 'none']);
    setPage('post');
  };

  const goToBook = () => {
    setCategoryDeco(['none', 'picked']);
    setPage('book');
  };

  useEffect(() => {
    fetch('/data/post_list_data.json')
      .then(res => res.json())
      .then(res => setPostList(res));
  }, []);

  useEffect(() => {
    postList.map(post => {
      const newDate = post.created_at;
      const dateArr = (newDate + '').split(' ')[0].split('-');
      let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let selectedMonthName = months[Number(dateArr[1] - 1)];
      dateArr[1] = selectedMonthName;
      return (post.created_at = dateArr);
    });
  }, [postList]);

  useEffect(() => {
    fetch('/data/profile_brunchbook_list_data.json')
      .then(res => res.json())
      .then(res => {
        setBookList(res);
      });
  }, []);

  return (
    <DrawerWrapper>
      <DrawerCategory>
        <p className={categoryDeco[0]} onClick={goToPost}>
          저장글
        </p>
        <p className={categoryDeco[1]} onClick={goToBook}>
          브런치북
        </p>
      </DrawerCategory>
      <DrawerBanner
        onClick={() => {
          navigate('/request');
        }}
      >
        <img src="/images/drawerbanner.png" alt="" />
      </DrawerBanner>
      {page === 'post' && (
        <PostListWrapper>
          {postList.map(card => (
            <DrawerPostCard key={card.id} card={card} />
          ))}
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
  height: 80px;
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
