import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function PostCard(props) {
  const [start, setStart] = useState(false);

  useState(() => {
    setTimeout(() => {
      setStart(true);
    }, 500);
  }, []);

  function makeLink() {
    document.execCommand('createLink', false, props.url);
    props.setToolBarOn(false);
    props.closeSideBar();
  }
  return (
    <PostCardWrapper startf={start}>
      <MakeLinkButton onClick={makeLink} />
      <PostCardContentWrapper>
        <PostCardTextWrapper>
          <PostCardTitle>{props.Title}</PostCardTitle>
          <PostCardBody>{props.Summary}</PostCardBody>
        </PostCardTextWrapper>
        <ThumbnailCase post_thumbnail_url={props.post_thumbnail_url} />
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
}

export default PostCard;

const ThumbnailCase = styled.div`
  margin-left: 10px;
  width: 50px;
  height: 50px;
  ${props => {
    if (props.post_thumbnail_url.length > 0) {
      return css`
        background-image: url(${props.post_thumbnail_url});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      `;
    }
  }}
`;
const PostCardTextWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const PostCardWrapper = styled.div`
  transition: opacity 1s, height 0.5s;

  opacity: 0;
  width: 100%;
  height: 0px;
  border-bottom: 1px rgb(230, 230, 230) solid;
  position: relative;
  ${props => {
    if (props.startf) {
      return css`
        opacity: 1;
        height: 100px;
      `;
    }
  }}
`;
const PostCardContentWrapper = styled.div`
  display: flex;
  user-select: none;
  padding: 25px;
  border-bottom: 0px rgb(230, 230, 230) solid;
`;
const PostCardTitle = styled.div`
  font-weight: 300;
  font-size: 18x;
  color: rgb(120, 120, 120);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const PostCardBody = styled.div`
  font-weight: 100;
  font-size: 11px;
  margin-top: 6px;
  color: rgb(120, 120, 120);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-all;
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
