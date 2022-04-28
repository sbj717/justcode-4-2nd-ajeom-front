import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import styled, { css } from 'styled-components';
import PostCard from './PostCard';

function SelectedPost(props) {
  function dragStart(item, index) {
    props.setNowDragged({
      Title: item.Title,
      Summary: item.Summary,
      Id: item.Id,
      target: 2,
      selectedPostTarget: index,
      post_thumbnail_url: item.post_thumbnail_url,
    });
  }

  function dragEnd(event) {
    props.setNowDragged({
      id: '',
      Title: '',
      Summary: '',
      target: 0,
      selectedPostTarget: -1,
      post_thumbnail_url: '',
    });
  }

  return props.selectedPostList.map((item, index) => {
    return (
      <SelectedPostWrapper
        key={item.Id}
        style={
          index + 1 == props.selectedPostList.length
            ? {
                borderTop: '1px rgb(230, 230, 230) solid',
                borderBottom: '1px rgb(230, 230, 230) solid',
              }
            : { borderTop: '1px rgb(230, 230, 230) solid' }
        }
      >
        {props.nowDragged.target == 0 ||
        (props.nowDragged.target == 2 &&
          props.nowDragged.selectedPostTarget == index) ? (
          <MakeLinkButton
            draggable
            onDragStart={() => {
              dragStart(item, index);
            }}
            onDragEnd={dragEnd}
          ></MakeLinkButton>
        ) : null}
        <SelectedPostDropZone
          onDragOver={event => {
            event.stopPropagation();
            event.preventDefault();
          }}
          onDrop={event => {
            let list = props.selectedPostList;
            if (props.nowDragged.selectedPostTarget != -1) {
              list.splice(props.nowDragged.selectedPostTarget, 1, 1);
            }
            list.splice(index, 0, {
              Title: props.nowDragged.Title,
              Id: props.nowDragged.Id,
              Summary: props.nowDragged.Summary,
              post_thumbnail_url: props.nowDragged.post_thumbnail_url,
            });
            if (props.nowDragged.selectedPostTarget != -1) {
              list = list.filter(i => {
                return i != 1;
              });
            }
            props.setSelectedPostList(list);
            event.target.style.borderTop = 'rgb(230, 230, 230) 0px solid';
            props.setNowDragged({
              id: '',
              Title: '',
              Summary: '',
              target: 0,
              selectedPostTarget: -1,
              post_thumbnail_url: '',
            });
          }}
          onDragEnter={event => {
            event.target.style.borderTop = 'rgb(230, 230, 230) 30px solid';
          }}
          onDragLeave={event => {
            event.target.style.borderTop = 'rgb(230, 230, 230) 0px solid';
          }}
        />

        <SelectedPostTitle>
          <div>
            <b style={{ marginRight: '15px' }}>
              {index + 1 > 9 ? index + 1 : '0' + (index + 1)}
            </b>
            {item.Title}
          </div>
          <ThumbnailCase
            backgroundUrl={item.post_thumbnail_url}
          ></ThumbnailCase>
        </SelectedPostTitle>
        <SelectedPostDropZone
          onDragEnter={event => {
            event.target.style.borderBottom = 'rgb(230, 230, 230) 30px solid';
          }}
          onDragLeave={event => {
            event.target.style.borderBottom = 'rgb(230, 230, 230) 0px solid';
          }}
          onDragOver={event => {
            event.stopPropagation();
            event.preventDefault();
          }}
          onDrop={event => {
            let list = props.selectedPostList;
            if (props.nowDragged.selectedPostTarget != -1) {
              list.splice(props.nowDragged.selectedPostTarget, 1, 1);
            }
            list.splice(index + 1, 0, {
              Title: props.nowDragged.Title,
              Id: props.nowDragged.Id,
              Summary: props.nowDragged.Summary,
              post_thumbnail_url: props.nowDragged.post_thumbnail_url,
            });
            if (props.nowDragged.selectedPostTarget != -1) {
              list = list.filter(i => {
                return i != 1;
              });
            }
            props.setSelectedPostList(list);
            event.target.style.borderBottom = 'rgb(230, 230, 230) 0px solid';
            props.setNowDragged({
              id: '',
              Title: '',
              Summary: '',
              target: 0,
              selectedPostTarget: -1,
              post_thumbnail_url: '',
            });
          }}
        />
      </SelectedPostWrapper>
    );
  });
}

const ThumbnailCase = styled.div`
  user-select: none;
  position: relative;
  right: -5px;
  top: -25px;
  width: 70px;
  height: 70px;
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        background-image: url(${props.backgroundUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      `;
    }
  }}
`;
const MakeLinkButton = styled.button`
  transition: background-color 0.5s, box-shadow 0.5s;
  z-index: 6;
  border: 0 solid;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: rgba(200, 200, 200, 0.3);
    box-shadow: 10px 5px 5px rgba(200, 200, 200, 1);
  }
`;
const SelectedPostWrapper = styled.div`
  position: relative;
  color: rgb(100, 100, 100);
  width: 100%;
  border-radius: 1px;

  border-left: 1px rgb(230, 230, 230) solid;
  border-right: 1px rgb(230, 230, 230) solid;
`;
const SelectedPostDropZone = styled.div`
  transition: border-top 0.5s, border-bottom 0.5s;
  border-top: transparent 0px solid;
  border-bottom: transparent 0px solid;
  width: 100%;
  border-radius: 0px;
  padding: 20px 0px;
  background-color: transparent;
`;
const SelectedPostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 20px;
  font-weight: 300;
  z-index: 3;
`;
const SelectedPostNum = styled.div`
  font-weight: 300;
`;

function BookSideBar(props) {
  const [offset, setOffset] = useState(1);
  const [reloadSw, setReloadSw] = useState(0);
  const [postList, setPostList] = useState([]);
  const [selectedPostList, setSelectedPostList] = useState([]);
  const [postListContainerRoot, setPostListContainerRoot] = useState(0);
  const [nowDragged, setNowDragged] = useState({
    id: false,
    Title: '',
    Summary: '',
    post_thumbnail_url: '',
  });
  const PostListContainerRef = useRef();
  const reloadSensorRef = useRef();

  useEffect(() => {
    if (reloadSw == 1) {
      reloadData();
    }
  }, [reloadSw]);

  useEffect(() => {
    setPostListContainerRoot(ReactDOM.createRoot(PostListContainerRef.current));
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
      >
        <FullScreenBlackDropZone
          onDragOver={event => {
            event.stopPropagation();
            event.preventDefault();
          }}
          onDrop={event => {
            let list = selectedPostList;
            if (nowDragged.selectedPostTarget != -1) {
              list.splice(nowDragged.selectedPostTarget, 1);
            }

            setSelectedPostList(list);

            setNowDragged({
              id: '',
              Title: '',
              Summary: '',
              target: 0,
              selectedPostTarget: -1,
              post_thumbnail_url: '',
            });
          }}
        />
        <PostListWrapper isSideBarOpen={props.isSideBarOpen}>
          <PostListWrapperTitle>목차</PostListWrapperTitle>
          <PostListContainer
            selectedPostListLength={selectedPostList.length}
            ref={PostListContainerRef}
          >
            {selectedPostList.length == 0 ? (
              <>
                <DragGuideDropZone
                  onDragOver={event => {
                    event.stopPropagation();
                    event.preventDefault();
                  }}
                  onDrop={() => {
                    let list = selectedPostList;

                    list.push({
                      Title: nowDragged.Title,
                      Id: nowDragged.Id,
                      Summary: nowDragged.Summary,
                      post_thumbnail_url: nowDragged.post_thumbnail_url,
                    });

                    setSelectedPostList(list);
                  }}
                />
                <DragGuide>
                  오른쪽 글 목록에서 목차로 구성할 글을 마우스로 끌어
                  담아보세요.
                </DragGuide>
              </>
            ) : null}
            <SelectedPost
              selectedPostList={selectedPostList}
              nowDragged={nowDragged}
              setSelectedPostList={setSelectedPostList}
              setNowDragged={setNowDragged}
              ///////////
            ></SelectedPost>
          </PostListContainer>
        </PostListWrapper>
      </FullScreenBlack>
      <SideBarWrapper isSideBarOpen={props.isSideBarOpen}>
        <TitleWrapper>
          <TitleText>나의 글</TitleText>
          <ButtonWrapper>
            <CompleteButton
              onClick={() => {
                let list = selectedPostList;

                let outList = [];
                list.map((item, index) => {
                  outList.push({
                    sequence: index + 1,
                    post_id: item.Id,
                    post_title: item.Title,
                    post_summary: item.Summary,
                    post_thumbnail_url: item.post_thumbnail_url,
                  });
                });

                props.setPostList(outList);
                props.closeSideBar();
              }}
            >
              완료
            </CompleteButton>
            <CancelButton onClick={props.closeSideBar}>취소</CancelButton>
          </ButtonWrapper>
        </TitleWrapper>
        <Wrapper>
          {postList.map(c => {
            return (
              <PostCard
                key={c.id}
                id={c.id}
                Title={c.Title}
                url="df.com"
                Summary={c.Summary}
                post_thumbnail_url={c.post_thumbnail_url}
                closeSideBar={props.closeSideBar}
                nowDragged={nowDragged}
                setNowDragged={setNowDragged}
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

export default BookSideBar;

const Wrapper = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  transition: margin-top 0.3s;
  margin-right: 360px;
  margin-top: -300px;
  margin-bottom: 60px;
  background-color: white;
  border-radius: 5px;
  ${props => {
    if (props.isSideBarOpen) {
      return css`
        margin-top: 60px;
      `;
    }
  }}
`;
const PostListWrapperTitle = styled.div`
  font-size: 20px;
  color: rgb(130, 130, 130);
  margin-top: 30px;
  text-align: center;
  width: 100%;
`;
const PostListContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  margin: 30px 0;
  transition: padding 0.5s, border 0.5s, background-color 0.5s;
  padding: 150px 0;

  border: 1px rgb(230, 230, 230) solid;
  background-color: rgba(230, 230, 230, 0.3);
  ${props => {
    if (props.selectedPostListLength > 0) {
      return css`
        padding: 0px 0;
        border: 0px rgb(230, 230, 230) solid;
        background-color: rgba(230, 230, 230, 0);
      `;
    }
  }}
`;

const DragGuide = styled.div`
  color: rgb(160, 160, 160);
  text-align: center;
  width: 100%;
`;
const DragGuideDropZone = styled.button`
  top: 0px;

  transition: 0.5s;
  z-index: 6;
  border: 0 solid;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ReloadSensor = styled.div`
  height: 100px;
`;

const FullScreenBlack = styled.div`
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  ${props => {
    if (props.isSideBarOpen) {
      return css`
        visibility: visible;
        opacity: 1;
      `;
    }
  }}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const FullScreenBlackDropZone = styled.div`
  z-index: -1;
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SideBarWrapper = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
  transition: right 0.4s;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.div`
  white-space: nowrap;
`;
const Space = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(170, 170, 170);
`;

const CompleteButton = styled.button`
  font-size: 13px;
  border: 1.3px solid #00c3bd;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  background-color: #00c3bd;
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
  float: right;
  margin-left: 5px;
`;

const CancelButton = styled(CompleteButton)`
  border: 1.3px solid #aaaaaa;
  background-color: #ffffff;
  color: #aaaaaa;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;
