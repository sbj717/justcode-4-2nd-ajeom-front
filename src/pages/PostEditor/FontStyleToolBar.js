import React, { forwardRef, useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import style from './Editor.module.scss';

import {
  BiImageAlt,
  BiAlignLeft,
  BiImageAdd,
  BiMap,
  BiColorFill,
  BiBold,
  BiUnderline,
  BiItalic,
  BiText,
  BiLink,
  BiCheck,
} from 'react-icons/bi';

let Button = styled.button`
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

let FormatButton = styled(Button)`
  flex: 1;
  font-size: 10px;
  padding: 10px 10px 10px 10px;
`;
let ModalCase = styled.div`
  transition: opacity 0.2s, margin-top 0.2s;

  ${props => {
    if (props.modalOn) {
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
    props.modalPosition ? props.modalPosition[0] + 'px' : null};
  top: ${props => (props.modalPosition ? props.modalPosition[1] + 'px' : null)};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

let ButtonCase = styled.div`
  background-color: white;

  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;

  z-index: 1;
`;
let LinkTextField = styled.input`
  border: 0px rgb(230, 230, 230) solid;
  width: 100%;
  border-left: 1px rgb(230, 230, 230) solid;
  outline: none;
`;
let LinkCase = styled.div`
  background-color: white;
  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;
`;
let FormatCase = styled.div`
  background-color: white;
  border-bottom: 1px rgb(230, 230, 230) solid;
  display: flex;
`;

function FontStyleToolBar(props, ref) {
  const [link, setLink] = useState(false);
  const [format, setFormat] = useState(false);
  useEffect(() => {
    if (!props.modalOn) {
      setLink(false);
      setFormat(false);
    }
  }, [props.modalOn]);
  function linkOn() {
    if (link) {
      setLink(false);
    } else {
      setLink(true);
    }
  }
  function formatOn() {
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
      <ModalCase
        ref={ref}
        modalOn={props.modalOn}
        modalPosition={props.modalPosition}
      >
        <ButtonCase>
          <Button
            onClick={() => {
              formatOn();
              setLink(false);
            }}
          >
            <BiText className={style.button} size="20" />
          </Button>
          <Button
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('bold');
            }}
          >
            <BiBold className={style.button} size="20" />
          </Button>
          <Button
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('underline');
            }}
          >
            <BiUnderline className={style.button} size="20" />
          </Button>
          <Button
            onClick={() => {
              setLink(false);
              setFormat(false);
              document.execCommand('italic');
            }}
          >
            <BiItalic className={style.button} size="20" />
          </Button>
          <Button
            onClick={() => {
              setFormat(false);
              linkOn();
            }}
          >
            <BiLink className={style.button} size="20" />
          </Button>
        </ButtonCase>
        {link ? (
          <LinkCase>
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
          </LinkCase>
        ) : null}

        {format ? (
          <FormatCase>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h1');
                props.calModalPosition();
              }}
            >
              제목1
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h2');
                props.calModalPosition();
              }}
            >
              제목2
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'h3');
                props.calModalPosition();
              }}
            >
              제목3
            </FormatButton>
            <FormatButton
              onClick={async () => {
                await document.execCommand('formatblock', false, 'p');
                props.calModalPosition();
              }}
            >
              본문
            </FormatButton>
          </FormatCase>
        ) : null}
      </ModalCase>
    </>
  );
}

const forwardedRefFontStyleToolBar = React.forwardRef(FontStyleToolBar);

export default forwardedRefFontStyleToolBar;
