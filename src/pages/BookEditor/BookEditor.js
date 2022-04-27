import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';

import BookSideBar from './BookSideBar';
function BookEditor() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [postList, setPostList] = useState([]);
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
        <BrunchbookTop />
        <PublishButton mainColor={'#aaaaaa'} onClick={openSideBar}>
          목차 편집
        </PublishButton>

        <BrunchbookBottom postList={postList} />

        {postList.length > 0 ? (
          <PublishButton mainColor={'#00c3bd'} onClick={openSideBar}>
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
