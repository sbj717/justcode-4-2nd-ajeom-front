import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import style from './Editor.module.scss';
import FontStyleToolBar from './FontStyleToolBar';
import MyPostLinkSideBar from './MyPostLinkSideBar';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import {
  BiImageAlt,
  BiImageAdd,
  BiListUl,
  BiMoviePlay,
  BiPaperclip,
  BiSmile,
  BiMenuAltLeft,
  BiMapPin,
  BiTrash,
} from 'react-icons/bi';
import Header from '../components/Header/Header';
function Editor() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isMyPostLinkSidebarOpen, setIsMyPostLinkSidebarOpen] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [ToolBarOn, setToolBarOn] = useState(false);
  const [scrollYstate, setScrollYstate] = useState(0);
  const [ToolBarPosition, setToolBarPosition] = useState([0, 0]);
  const [mainTextFieldFocused, setMainTextFieldFocused] = useState(false);
  const [selectedKeywordList, setSelectedKeywordList] = useState([]);
  const FontStyleToolBarRef = useRef();
  const MainTextFieldRef = useRef();
  const TilteTextFieldRef = useRef();
  const SubTilteTextFieldRef = useRef();
  const TopWrapperRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/user/myProfile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
        console.log(data);
      });
  }, []);

  function PublishPost(Q) {
    if (Q == 1 && userInfo.is_author == 0) {
      alert('작가만 발행할 수 있습니다.');
      return;
    }

    if (TilteTextFieldRef.current.textContent.length < 2) {
      alert('제목을 2자 이상 입력하세요.');
      return;
    } else if (SubTilteTextFieldRef.current.textContent < 2) {
      alert('소제목을 2자 이상 입력하세요.');
      return;
    } else if (backgroundUrl.length == 0) {
      alert('타이틀 이미지를 설정하세요.');
      return;
    } else if (MainTextFieldRef.current.textContent < 15) {
      alert('본문을 15자 이상 입력하세요.');
      return;
    } else if (selectedKeywordList.length == 0) {
      alert('키워드를 1개 이상 선택하세요.');
      return;
    }

    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: token },
      body: JSON.stringify({
        title: TilteTextFieldRef.current.textContent,
        body: MainTextFieldRef.current.innerHTML,
        summary: MainTextFieldRef.current.textContent.substr(0, 200),
        subtitle: SubTilteTextFieldRef.current.textContent,
        isPublished: Q,
        thumbnailUrl: backgroundUrl,
        keywordIdList: selectedKeywordList,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (Q == 1) {
          alert('글이 발행되었습니다.');
        } else {
          alert('글이 저장되었습니다.');
        }
        navigate(`/detail/${data.post_id}`);
        window.scrollTo(0, 0);
      });
  }

  function calToolBarPosition() {
    const selection = window.getSelection();
    if (selection.type === 'Range') {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setToolBarPosition([rect.left, window.scrollY + rect.bottom]);
      setToolBarOn(true);
    } else {
      setToolBarOn(false);
    }
  }

  useEffect(() => {
    TilteTextFieldRef.current.focus();
    TilteTextFieldRef.current.addEventListener('keypress', evt => {
      if (evt.which === 13) {
        evt.preventDefault();
      }
    });
    SubTilteTextFieldRef.current.addEventListener('keypress', evt => {
      if (evt.which === 13) {
        evt.preventDefault();
      }
    });
    window.addEventListener('scroll', () => {
      setScrollYstate(window.scrollY);
    });

    TilteTextFieldRef.current.addEventListener('paste', function (event) {
      event.preventDefault();
      var pastedData = event.clipboardData || window.clipboardData;
      var textData = pastedData.getData('Text');
      window.document.execCommand('insertHTML', false, textData);
    });

    MainTextFieldRef.current.addEventListener('paste', function (event) {
      event.preventDefault();
      var pastedData = event.clipboardData || window.clipboardData;
      var textData = pastedData.getData('Text');
      window.document.execCommand('insertHTML', false, textData);
    });

    SubTilteTextFieldRef.current.addEventListener('paste', function (event) {
      event.preventDefault();
      var pastedData = event.clipboardData || window.clipboardData;
      var textData = pastedData.getData('Text');
      window.document.execCommand('insertHTML', false, textData);
    });

    document.addEventListener('pointerup', e => {
      const selection = window.getSelection();

      if (selection.type === 'Caret') {
        if (
          MainTextFieldRef.current.contains(
            selection.getRangeAt(0).commonAncestorContainer
          )
        ) {
          setMainTextFieldFocused(true);
        } else {
          setMainTextFieldFocused(false);
          setToolBarOn(false);
        }
      }

      if (selection.type === 'Range') {
        const range = selection.getRangeAt(0);
        if (
          MainTextFieldRef.current.contains(range.commonAncestorContainer) ||
          FontStyleToolBarRef.current.contains(range.commonAncestorContainer)
        ) {
          calToolBarPosition();
          setMainTextFieldFocused(true);
        } else {
          setToolBarOn(false);
          setMainTextFieldFocused(false);
        }
      } else {
        setToolBarOn(false);
      }
    });
  }, []);
  function addImage() {
    if (mainTextFieldFocused) {
      let url = prompt('이미지 URL을 입력하세요', '');
      if (url) {
        if (url.length > 0) {
          document.execCommand('insertImage', false, url);
        }
      }
    } else {
      alert('본문에서만 사용가능합니다.');
    }
  }
  function addList() {
    if (mainTextFieldFocused) {
      document.execCommand('insertUnorderedList');
    } else {
      alert('본문에서만 사용가능합니다.');
    }
  }
  function addBackground() {
    let url = prompt('이미지 URL을 입력하세요', '');
    if (url) {
      if (url.length > 0) {
        setBackgroundUrl(url);
      }
    }
  }
  function delBackground() {
    setBackgroundUrl('');
  }
  function openSideBar() {
    setIsSideBarOpen(true);
  }
  function closeSideBar() {
    setIsSideBarOpen(false);
    setIsMyPostLinkSidebarOpen(false);
  }
  function openMyPostLinkSidebar() {
    setIsMyPostLinkSidebarOpen(true);
  }

  return (
    <>
      <Header />
      <MyPostLinkSideBar
        isSideBarOpen={isMyPostLinkSidebarOpen}
        closeSideBar={closeSideBar}
        setToolBarOn={setToolBarOn}
      ></MyPostLinkSideBar>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        closeSideBar={closeSideBar}
        selectedKeywordList={selectedKeywordList}
        setSelectedKeywordList={setSelectedKeywordList}
        PublishPost={PublishPost}
      ></SideBar>
      <FontStyleToolBar
        ToolBarPosition={ToolBarPosition}
        ToolBarOn={ToolBarOn}
        calToolBarPosition={calToolBarPosition}
        openMyPostLinkSidebar={openMyPostLinkSidebar}
        ref={FontStyleToolBarRef}
      />
      <TopWrapper ref={TopWrapperRef}>
        <TopBackgroundImageWrapper
          backgroundUrl={backgroundUrl}
          divHeight={
            TopWrapperRef.current ? TopWrapperRef.current.clientHeight : 0
          }
        />
        <TopToolsWrapper>
          <TopButton onClick={addBackground} backgroundUrl={backgroundUrl}>
            <BiImageAlt className={style.button} size="30" />
          </TopButton>
          <TopButton onClick={delBackground} backgroundUrl={backgroundUrl}>
            <BiTrash className={style.Button} size="30" />
          </TopButton>
        </TopToolsWrapper>
        <TopTitleWrapper>
          <TilteField
            autoFocus
            ref={TilteTextFieldRef}
            backgroundUrl={backgroundUrl}
            contentEditable="true"
            placeholder="제목을 입력하세요"
            spellCheck="false"
          ></TilteField>
          <SubTilteField
            backgroundUrl={backgroundUrl}
            ref={SubTilteTextFieldRef}
            contentEditable="true"
            placeholder="소제목을 입력하세요"
            spellCheck="false"
          ></SubTilteField>
        </TopTitleWrapper>
      </TopWrapper>
      <BottomWrapper>
        <MainTextFieldWrapper>
          <MainTextField
            ref={MainTextFieldRef}
            className={style.ajeomBody}
            onKeyUp={() => {
              setToolBarOn(false);
            }}
            contentEditable="true"
            placeholder="본문을 입력하세요"
            spellCheck="false"
          ></MainTextField>
          <MainToolbox scrollY={scrollYstate}>
            <Button onClick={addImage}>
              <BiImageAdd
                style={{ paddingLeft: '2px' }}
                className={style.button}
                size="30"
              />
            </Button>
            <Button>
              <BiListUl onClick={addList} className={style.button} size="30" />
            </Button>
            <BiMoviePlay className={style.noButton} size="30" />
            <BiPaperclip className={style.noButton} size="30" />
            <BiSmile className={style.noButton} size="30" />
            <BiMenuAltLeft className={style.noButton} size="30" />
            <BiMapPin className={style.noButton} size="30" />
          </MainToolbox>
        </MainTextFieldWrapper>
        <PublishButtonBox>
          <PublishButton mainColor={'#00c3bd'} onClick={openSideBar}>
            완료
          </PublishButton>
        </PublishButtonBox>
      </BottomWrapper>
    </>
  );
}

export default Editor;

const PublishButton = styled.button`
  font-size: 13px;
  border: 1.3px solid
    ${props => {
      return props.mainColor;
    }};
  border-radius: 20px;
  padding: 0.3rem 2.5rem;
  margin-top: 30px;
  background-color: #ffffff;
  color: ${props => {
    return props.mainColor;
  }};
  font-weight: 300;
  cursor: pointer;
  float: right;
`;
const PublishButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 170px;
`;

const TopWrapper = styled.div`
  transition: 1s;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: rgb(230, 230, 230) 0px solid;
  border-width: 0px 0px 1px 0px;
`;

const TopBackgroundImageWrapper = styled.div`
  transition: opacity 1s;
  opacity: 0;
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        opacity: 1;

        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
          url(${props.backgroundUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: ${props.divHeight + 'px'};
      `;
    }
  }}
  width: 100%;
  position: absolute;
`;

const TopToolsWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 1020px;
  height: 249px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const TopTitleWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 1020px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  padding-left: 150px;
  padding-bottom: 50px;
`;

const TilteField = styled.div`
  cursor: text;
  outline: none;
  box-sizing: border-box;
  position: relative;
  width: 700px;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 50px;
  margin-bottom: 10px;
  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block; /* For Firefox */
  }
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        color: rgb(255, 255, 255);
      `;
    }
  }}
`;

const SubTilteField = styled.div`
  outline: none;
  box-sizing: border-box;
  cursor: text;
  position: relative;
  width: 700px;
  font-weight: 100;
  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block; /* For Firefox */
  }
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        color: rgb(255, 255, 255);
      `;
    }
  }}
`;

const BottomWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0 80px 0;
  border: red 0px solid;
`;

const MainTextFieldWrapper = styled.div`
  cursor: text;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 1020px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 0 70px 0;
`;

const MainTextField = styled.div`
  outline: none;
  box-sizing: border-box;
  margin-left: 150px;
  position: relative;
  width: 700px;
  font-weight: 100;
  line-height: 210%;
  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block;
  }
`;

const MainToolbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: 0.5s;
  ${props => {
    if (props.scrollY > 450) {
      return css`
        margin-top: ${props.scrollY - 350 + 'px'};
      `;
    }
  }}
`;

const Button = styled.button`
  padding: 0 0 0 0;
  border: 0px red solid;
  color: #757575;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    color: rgb(95, 205, 196);
    cursor: pointer;
  }
`;

const TopButton = styled.button`
  padding: 0 0 0 0;
  border: 0px red solid;
  color: #757575;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    color: rgb(95, 205, 196);
    cursor: pointer;
  }
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        color: rgb(255, 255, 255);
      `;
    }
  }}
`;
