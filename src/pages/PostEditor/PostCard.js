import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
let PostCardCase = styled.div`
  transition: opacity 1s, height 0.5s;

  opacity: 0;
  width: 100%;
  height: 0px;
  border-bottom: 1px rgb(230, 230, 230) solid;
  position: relative;
  ${props => {
    if (props.start) {
      return css`
        opacity: 1;
        height: 100px;
      `;
    }
  }}
`;
let PostCardContentCase = styled.div`
  user-select: none;
  padding: 25px;
  border-bottom: 0px rgb(230, 230, 230) solid;
`;
let PostCardTitle = styled.div`
  font-weight: 100;
  font-size: 18x;
`;
let PostCardBody = styled.div`
  font-weight: 100;
  font-size: 13px;
  margin-top: 6px;
  color: rgb(120, 120, 120);
`;

const MakeLinkButton = styled.button`
  cursor: pointer;
  transition: 0.5s;
  z-index: 6;
  border: 0 solid;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function PostCard(props) {
  const [start, setStart] = useState(false);

  useState(() => {
    setTimeout(() => {
      setStart(true);
    }, 500);
  }, []);

  function makeLink() {
    document.execCommand('createLink', false, props.url);
    props.closeSideBar();
  }
  return (
    <>
      <PostCardCase start={start}>
        <MakeLinkButton onClick={makeLink} />
        <PostCardContentCase>
          <PostCardTitle>{props.Title}</PostCardTitle>
          <PostCardBody>{props.Summary}</PostCardBody>
        </PostCardContentCase>
      </PostCardCase>
    </>
  );
}

export default PostCard;
