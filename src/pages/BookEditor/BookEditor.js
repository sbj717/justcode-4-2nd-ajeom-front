import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';

import BookSideBar from './BookSideBar';
function BookEditor() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const [BrunchbookTopRef, setBrunchbookTopRef] = useState({
    title: '',
    bookcover_url: '',
    description: '',
  });

  function PublishBook() {
    const token = localStorage.getItem('token');
    console.log(token);
    fetch('http://localhost:8000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: token },
      body: JSON.stringify({
        title: BrunchbookTopRef.title.current.innerText,
        bookcover_url: BrunchbookTopRef.bookcover_url,
        description: BrunchbookTopRef.description.current.innerText,
        postIdList: [1, 2, 3, 4],
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
