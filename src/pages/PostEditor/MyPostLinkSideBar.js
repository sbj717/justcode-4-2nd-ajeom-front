import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PostCard from './PostCard';

function MyPostLinkSideBar(props) {
  const [offset, setOffset] = useState(1);
  const [reloadSw, setReloadSw] = useState(0);
  const [postList, setPostList] = useState([]);
  const reloadSensorRef = useRef();

  useEffect(() => {
    if (reloadSw == 1) {
      reloadData();
    }
  }, [reloadSw]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting == true) {
          setReloadSw(1);
        }
      },
      { threshold: [0.5] }
    );

    io.observe(reloadSensorRef.current);
  }, []);

  function reloadData() {
    const token = localStorage.getItem('token');

    setLoadingText('불러오는 중');
    setTimeout(() => {
      setLoadingText('위로 스크롤해서 더 보기');
    }, 800);
    setTimeout(() => {
      fetch(`http://localhost:8000/write?offset=${offset}&limit=${10}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', token: token },
      })
        .then(res => res.json())
        .then(data => {
          if (data.PostList.length > 0) {
            setPostList(postList.concat(data.PostList));

            setReloadSw(0);
          }
        });
    }, 200);
    setOffset(offset + 1);
  }
  const [loadingText, setLoadingText] = useState('불러오는 중');
  return (
    <>
      <FullScreenBlack
        onClick={props.closeSideBar}
        isSideBarOpen={props.isSideBarOpen}
      ></FullScreenBlack>
      <SideBarWrapper isSideBarOpen={props.isSideBarOpen}>
        <TitleWrapper>나의 글</TitleWrapper>
        <Wrapper>
          {postList.map(c => {
            return (
              <PostCard
                setToolBarOn={props.setToolBarOn}
                key={c.id}
                Title={c.Title}
                url={`localhost:3000/post/${c.id}`}
                Summary={c.Summary}
                closeSideBar={props.closeSideBar}
                post_thumbnail_url={c.post_thumbnail_url}
              ></PostCard>
            );
          })}
          {props.isSideBarOpen ? <Space>{loadingText}</Space> : null}
          <ReloadSensor ref={reloadSensorRef} />
        </Wrapper>
      </SideBarWrapper>
    </>
  );
}

export default MyPostLinkSideBar;

const Wrapper = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const ReloadSensor = styled.div`
  height: 100px;
`;

const FullScreenBlack = styled.div`
  transition: 1s;
  left: 0;
  top: 0;
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

const SideBarWrapper = styled.div`
  top: 0;
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
const TitleWrapper = styled.div`
  padding: 25px;
  font-weight: 100;
  font-size: 18x;
  border-bottom: 1px rgb(230, 230, 230) solid;
`;
const Space = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(170, 170, 170);
`;
