import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import style from './Editor.module.scss';
import FontStyleToolBar from './FontStyleToolBar';
import MyPostLinkSideBar from './MyPostLinkSideBar';
import SideBar from './SideBar';
import {
  BiImageAlt,
  BiImageAdd,
  BiListUl,
  BiDotsHorizontalRounded,
  BiListOl,
  BiImage,
  BiMoviePlay,
  BiPaperclip,
  BiSmile,
  BiMenuAltLeft,
  BiMapPin,
  BiColorFill,
  BiMenu,
  BiImages,
  BiTrash,
} from 'react-icons/bi';

import { MdLineStyle } from 'react-icons/md';

let TopCase = styled.div`
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

let TopBackgroundImageCase = styled.div`
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

let TopToolsCase = styled.div`
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
  // border: black 1px solid;
`;

let TopTitleCase = styled.div`
  // border: black 1px solid;
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

let TilteField = styled.div`
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

let SubTilteField = styled.div`
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

let BottomCase = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0 150px 0;
  border: red 0px solid;
`;

let MainTextFieldCase = styled.div`
  cursor: text;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  width: 1020px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 0 150px 0;

  //  border: black 1px solid;
`;

let MainTextField = styled.div`
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
    display: block; /* For Firefox */
  }
`;

let MainToolbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: 0.5s;
  ${props => {
    if (props.scrollY > 450) {
      return css`
        margin-top: ${props.scrollY - 450 + 'px'};
      `;
    }
  }}
`;

let Button = styled.button`
  padding: 0 0 0 0;
  border: 0px red solid;
  color: #757575;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    color: rgb(95, 205, 196);
    cursor: pointer;
  }
`;

let TopButton = styled.button`
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
let start = 0;
function Editor() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isMyPostLinkSidebarOpen, setIsMyPostLinkSidebarOpen] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const FontStyleToolBarRef = useRef();
  const MainTextFieldRef = useRef();
  const TopCaseRef = useRef();
  const [modalOn, setModalOn] = useState(false);
  const [scrollYstate, setScrollYstate] = useState(0);
  const [modalPosition, setModalPosition] = useState([0, 0]);
  function calModalPosition() {
    const selection = window.getSelection();
    if (selection.type === 'Range') {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setModalPosition([rect.left, window.scrollY + rect.bottom]);
      setModalOn(true);
    } else {
      setModalOn(false);
    }
  }
  useEffect(() => {
    document.addEventListener('pointerup', e => {
      const selection = window.getSelection();
      if (selection.type === 'Range') {
        const range = selection.getRangeAt(0);
        if (
          MainTextFieldRef.current.contains(range.commonAncestorContainer) ||
          FontStyleToolBarRef.current.contains(range.commonAncestorContainer)
        ) {
          calModalPosition();
        }
      } else {
        setModalOn(false);
      }
    });
  }, []);

  window.addEventListener('scroll', () => {
    setScrollYstate(window.scrollY);
  });

  function addImage() {
    let url = prompt('이미지 URL을 입력하세요', '');
    if (url.length > 0) {
      document.execCommand('insertImage', false, url);
    }
  }

  function addBackground() {
    let url = prompt('이미지 URL을 입력하세요', '');
    if (url.length > 0) {
      setBackgroundUrl(url);
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
    console.log(isMyPostLinkSidebarOpen);
  }

  return (
    <>
      <Button
        onClick={openSideBar}
        style={{ zIndex: 2, right: '0px', position: 'fixed' }}
      >
        <BiMenu className={style.button} size="30" />
      </Button>
      <MyPostLinkSideBar
        isSideBarOpen={isMyPostLinkSidebarOpen}
        closeSideBar={closeSideBar}
      ></MyPostLinkSideBar>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        closeSideBar={closeSideBar}
      ></SideBar>
      <FontStyleToolBar
        modalPosition={modalPosition}
        modalOn={modalOn}
        calModalPosition={calModalPosition}
        openMyPostLinkSidebar={openMyPostLinkSidebar}
        ref={FontStyleToolBarRef}
      />
      <TopCase ref={TopCaseRef}>
        <TopBackgroundImageCase
          backgroundUrl={backgroundUrl}
          divHeight={TopCaseRef.current ? TopCaseRef.current.clientHeight : 0}
        />
        <TopToolsCase>
          <TopButton onClick={addBackground} backgroundUrl={backgroundUrl}>
            <BiImageAlt className={style.button} size="30" />
          </TopButton>
          <TopButton onClick={delBackground} backgroundUrl={backgroundUrl}>
            <BiTrash className={style.Button} size="30" />
          </TopButton>
        </TopToolsCase>
        <TopTitleCase>
          <TilteField
            backgroundUrl={backgroundUrl}
            contentEditable="true"
            placeholder="제목을 입력하세요"
            spellCheck="false"
          ></TilteField>
          <SubTilteField
            backgroundUrl={backgroundUrl}
            contentEditable="true"
            placeholder="소제목을 입력하세요"
            spellCheck="false"
          ></SubTilteField>
        </TopTitleCase>
      </TopCase>
      <BottomCase>
        <MainTextFieldCase>
          <MainTextField
            ref={MainTextFieldRef}
            className={style.ajeomBody}
            onKeyUp={() => {
              setModalOn(false);
            }}
            contentEditable="true"
            placeholder="본문을 입력하세요"
            spellCheck="false"
          ></MainTextField>
          <MainToolbox scrollY={scrollYstate}>
            <Button
              onClick={() => {
                addImage();
              }}
            >
              <BiImageAdd className={style.button} size="29" />
            </Button>
            <Button>
              <BiListUl
                onClick={() => {
                  document.execCommand('insertUnorderedList');
                }}
                className={style.button}
                size="30"
              />
            </Button>
            <BiMoviePlay className={style.noButton} size="30" />
            <BiPaperclip className={style.noButton} size="30" />
            <BiSmile className={style.noButton} size="30" />
            <BiMenuAltLeft className={style.noButton} size="30" />
            <BiMapPin className={style.noButton} size="30" />
          </MainToolbox>
        </MainTextFieldCase>
      </BottomCase>
    </>
  );
}

export default Editor;
