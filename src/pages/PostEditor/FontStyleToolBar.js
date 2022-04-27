import React, { forwardRef, useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import style from './Editor.module.scss';

import { BiBold, BiUnderline, BiItalic, BiText, BiLink } from 'react-icons/bi';

function FontStyleToolBar(props, ref) {
  const [link, setLink] = useState(false);
  const [format, setFormat] = useState(false);
  useEffect(() => {
    if (!props.ToolBarOn) {
      setLink(false);
      setFormat(false);
    }
  }, [props.ToolBarOn]);
  function linkToggle() {
    if (link) {
      setLink(false);
    } else {
      setLink(true);
    }
  }
  function formatToggle() {
    if (format) {
      setFormat(false);
    } else {
      setFormat(true);
    }
  }

  function makeLink() {
    let url = prompt('URL을 입력하세요', '');
    if (url.length > 0) {
      document.execCommand('createLink', false, url);
    }
  }

  return (
    <>
      <ToolBarWrapper
        ref={ref}
        ToolBarOn={props.ToolBarOn}
        ToolBarPosition={props.ToolBarPosition}
      >
        <ButtonWrapper>
          <ToolButton
            onClick={() => {
              formatToggle();
              setLink(false);
            }}
          >
            <BiText className={style.button} size="20" />
          </ToolButton>
          <ToolButton
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('bold');
            }}
          >
            <BiBold className={style.button} size="20" />
          </ToolButton>
          <ToolButton
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('underline');
            }}
          >
            <BiUnderline className={style.button} size="20" />
          </ToolButton>
          <ToolButton
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('italic');
            }}
          >
            <BiItalic className={style.button} size="20" />
          </ToolButton>
          <ToolButton
            onClick={() => {
              setFormat(false);
              linkToggle();
            }}
          >
            <BiLink className={style.button} size="20" />
          </ToolButton>
        </ButtonWrapper>
        {link ? (
          <LinkWrapper>
            <FormatButton
              onClick={() => {
                props.openMyPostLinkSidebar();
              }}
            >
              나의 글
            </FormatButton>
            <FormatButton
              onClick={() => {
                makeLink();
              }}
            >
              외부 URL
            </FormatButton>
          </LinkWrapper>
        ) : null}

        {format ? (
          <FormatWrapper>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h1');
                props.calToolBarPosition();
              }}
            >
              제목1
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h2');
                props.calToolBarPosition();
              }}
            >
              제목2
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h3');
                props.calToolBarPosition();
              }}
            >
              제목3
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'p');
                props.calToolBarPosition();
              }}
            >
              본문
            </FormatButton>
          </FormatWrapper>
        ) : null}
      </ToolBarWrapper>
    </>
  );
}

const forwardedRefFontStyleToolBar = React.forwardRef(FontStyleToolBar);

export default forwardedRefFontStyleToolBar;

const ToolButton = styled.button`
  padding: 10px 10px 6px 10px;

  box-sizing: border-box;
  vertical-align: center;
  border: 0px rgb(230, 230, 230) solid;

  color: #757575;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    color: rgb(95, 205, 196);
    cursor: pointer;
  }
`;

const FormatButton = styled(ToolButton)`
  flex: 1;
  font-size: 10px;
  padding: 10px 10px 10px 10px;
`;
const ToolBarWrapper = styled.div`
  transition: opacity 0.2s, margin-top 0.2s;

  ${props => {
    if (props.ToolBarOn) {
      return css`
        opacity: 1;
        visibility: visible;
        margin-top: 10px;
      `;
    } else {
      return css`
        opacity: 0;
        visibility: hidden;
        margin-top: 0px;
      `;
    }
  }}
  background-color: white;

  border-top: 2px black solid;
  border-left: 1px rgb(230, 230, 230) solid;
  border-right: 1px rgb(230, 230, 230) solid;
  position: absolute;
  left: ${props =>
    props.ToolBarPosition ? props.ToolBarPosition[0] + 'px' : null};
  top: ${props =>
    props.ToolBarPosition ? props.ToolBarPosition[1] + 'px' : null};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonWrapper = styled.div`
  background-color: white;

  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;

  z-index: 1;
`;
const LinkTextField = styled.input`
  border: 0px rgb(230, 230, 230) solid;
  width: 100%;
  border-left: 1px rgb(230, 230, 230) solid;
  outline: none;
`;
const LinkWrapper = styled.div`
  background-color: white;
  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;
`;
const FormatWrapper = styled.div`
  background-color: white;
  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;
`;
