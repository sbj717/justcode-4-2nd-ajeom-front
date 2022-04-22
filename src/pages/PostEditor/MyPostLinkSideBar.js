import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PostCard from './PostCard';
let Case = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

let ReloadSensor = styled.div`
  height: 100px;
`;

let FullScreenBlack = styled.div`
  transition: 1s;
  background-color: rgba(0, 0, 0, 0);
  visibility: hidden;
  ${props => {
    if (props.isSideBarOpen) {
      return css`
        visibility: visible;
        background-color: rgba(0, 0, 0, 0.5);
      `;
    }
  }}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

let SideBarCase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
  transition: 0.5s;
  right: -360px;
  ${props => {
    if (props.isSideBarOpen) {
      return css`
        right: 0px;
      `;
    }
  }}
  position: fixed;

  width: 360px;
  height: 100%;
  background-color: rgb(250, 250, 250);
  z-index: 5;
`;

let TitleCase = styled.div`
  padding: 25px;
  font-weight: 100;
  font-size: 18x;
  border-bottom: 1px rgb(230, 230, 230) solid;
`;
let Space = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(170, 170, 170);
`;

function MyPostLinkSideBar(props) {
  const [keyhelper, setKeyhelper] = useState(1);
  const [test, setTest] = useState(0);

  const [postList, setPostList] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (test == 1) {
      reloadData();
    }
  }, [test]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting == true) {
          setTest(1);
        }
      },
      { threshold: [0.5] }
    );

    io.observe(ref.current);
  }, []);

  function reloadData() {
    setTimeout(() => {
      setLoadingText('위로 스크롤해서 더 보기');
    }, 800);
    fetch('/data/PostList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPostList(postList.concat(data.PostList));
        setTest(0);
      });
  }
  const [loadingText, setLoadingText] = useState('불러오는 중');

  return (
    <>
      <FullScreenBlack
        onClick={props.closeSideBar}
        isSideBarOpen={props.isSideBarOpen}
      ></FullScreenBlack>
      <SideBarCase isSideBarOpen={props.isSideBarOpen}>
        <TitleCase>나의 글</TitleCase>
        <Case>
          {postList.map(c => {
            return (
              <PostCard
                key={c.key}
                Title={c.Title}
                url="df.com"
                Summary={c.Summary}
                closeSideBar={props.closeSideBar}
              ></PostCard>
            );
          })}
          {props.isSideBarOpen ? <Space>{loadingText}</Space> : null}
          <ReloadSensor ref={ref} />
        </Case>
      </SideBarCase>
    </>
  );
}

export default MyPostLinkSideBar;
