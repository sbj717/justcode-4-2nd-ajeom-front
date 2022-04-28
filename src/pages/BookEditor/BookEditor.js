import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';
import { useNavigate } from 'react-router-dom';
import BookSideBar from './BookSideBar';
import Header from '../components/Header/Header';
function BookEditor() {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const [BrunchbookTopRef, setBrunchbookTopRef] = useState({
    title: '',
    bookcover_url: '',
    description: '',
  });

  function PublishBook() {
    if (BrunchbookTopRef.title.current.textContent.length < 2) {
      alert('제목을 2자 이상 입력하세요.');
      return;
    } else if (BrunchbookTopRef.bookcover_url.length == 0) {
      alert('북 커버 이미지를 설정하세요.');
      return;
    } else if (BrunchbookTopRef.description.current.textContent.length < 15) {
      alert('브런치북 소개를 15자 이상 입력하세요.');
      return;
    }

    let postIdList = [];

    for (let i = 0; i < postList.length; i++) {
      postIdList.push(postList[i].post_id);
    }

    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: token },
      body: JSON.stringify({
        title: BrunchbookTopRef.title.current.textContent,
        bookcover_url: BrunchbookTopRef.bookcover_url,
        description: BrunchbookTopRef.description.current.innerText,
        postIdList: postIdList,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert('브런치북이 발행되었습니다.');
        navigate(`/book/${data.bookId}`);
        window.scrollTo(0, 0);
      });
  }
  function openSideBar() {
    setIsSideBarOpen(true);
  }
  function closeSideBar() {
    setIsSideBarOpen(false);
  }
  return (
    <>
      <Header />
      <BookSideBar
        isSideBarOpen={isSideBarOpen}
        closeSideBar={closeSideBar}
        setPostList={setPostList}
      />
      <BrunchbookWrapper>
        <BrunchbookTop setBrunchbookTopRef={setBrunchbookTopRef} />
        <PublishButton mainColor={'#aaaaaa'} onClick={openSideBar}>
          목차 편집
        </PublishButton>

        <BrunchbookBottom postList={postList} />

        {postList.length > 0 ? (
          <PublishButton mainColor={'#00c3bd'} onClick={PublishBook}>
            발행
          </PublishButton>
        ) : null}
      </BrunchbookWrapper>
    </>
  );
}

export default BookEditor;

const BrunchbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#f8f8f8, white);
  margin-bottom: 100px;
`;

const PublishButton = styled.button`
  font-size: 13px;
  border: 1.3px solid
    ${props => {
      return props.mainColor;
    }};
  border-radius: 20px;
  padding: 0.3rem 1.5rem;
  margin-top: 30px;
  background-color: #ffffff;
  color: ${props => {
    return props.mainColor;
  }};
  font-weight: 300;
  cursor: pointer;
  float: right;
`;
