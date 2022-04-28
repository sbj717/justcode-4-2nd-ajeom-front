import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useForceUpdate,
} from 'react';
import styled, { css } from 'styled-components';
import style from './Editor.module.scss';
import KeywordToggleGroup from './KeywordToggleGroup';

const KeywordCounterWrapperF = props => {
  return (
    <KeywordCounterWrapper>
      {props.selectedKeywordListLen}/3
    </KeywordCounterWrapper>
  );
};

function SideBar(props, ref) {
  const [selectedKeywordCount, setSelectedKeywordListCount] = useState(0);

  function addKeyword(input) {
    let list = props.selectedKeywordList;
    list.push(input);
    props.setSelectedKeywordList(list);
    setSelectedKeywordListCount(selectedKeywordCount + 1);
  }
  function delKeyword(input) {
    let list = props.selectedKeywordList;
    let filtered = list.filter(element => element !== input);
    setSelectedKeywordListCount(selectedKeywordCount - 1);
    props.setSelectedKeywordList(filtered);
  }
  return (
    <>
      <FullScreenBlack
        onClick={props.closeSideBar}
        isSideBarOpen={props.isSideBarOpen}
      />
      <SideBarWrapper isSideBarOpen={props.isSideBarOpen}>
        <ButtonWrapper>
          <CompleteButton
            onClick={() => {
              props.PublishPost(1);
            }}
          >
            발행
          </CompleteButton>
          <CancelButton
            onClick={() => {
              props.PublishPost(0);
            }}
          >
            저장
          </CancelButton>
        </ButtonWrapper>
        <KeywordTitleWrapper>
          키워드 선택
          <KeywordCounterWrapperF
            selectedKeywordListLen={selectedKeywordCount}
          ></KeywordCounterWrapperF>
        </KeywordTitleWrapper>

        <KeywordToggleGroup
          addKeyword={addKeyword}
          delKeyword={delKeyword}
          selectedKeywordCount={selectedKeywordCount}
        />
      </SideBarWrapper>
    </>
  );
}

const forwardedRefSideBar = React.forwardRef(SideBar);

export default forwardedRefSideBar;

const FullScreenBlack = styled.div`
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
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 40px;
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

  top: 0;
  width: 360px;
  height: 100%;
  background-color: rgb(250, 250, 250);
  z-index: 6000;
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
const KeywordTitleWrapper = styled.div`
  display: inline-block;
  margin: 40px 0px 30px 0px;
  font-size: 20px;
  width: 100%;
  font-weight: normal;
`;
const KeywordCounterWrapper = styled.div`
  display: inline-block;
  font-weight: 100;
  margin-left: 20px;
`;
