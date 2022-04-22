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
  padding: 40px 30px 40px 40px;
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
let CompleteButton = styled.button`
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

let CancelButton = styled(CompleteButton)`
  border: 1.3px solid #aaaaaa;
  background-color: #ffffff;
  color: #aaaaaa;
`;

let ButtonCase = styled.div`
  width: 100%;
`;
let KeywordTitleCase = styled.div`
  display: inline-block;
  margin: 40px 0px 30px 0px;
  font-size: 20px;
  width: 100%;
  font-weight: normal;
`;
let KeywordCounterCase = styled.div`
  display: inline-block;

  font-weight: 100;
  margin-left: 20px;
`;

const KeywordCounterCaseF = props => {
  return (
    <KeywordCounterCase>{props.selectedKeywordListLen}/3</KeywordCounterCase>
  );
};

function SideBar(props, ref) {
  const [selectedKeywordList, setSelectedKeywordList] = useState([]);
  const [selectedKeywordCount, setSelectedKeywordListCount] = useState(0);
  function addKeyword(input) {
    let list = selectedKeywordList;
    list.push(input);

    setSelectedKeywordList(list);
    setSelectedKeywordListCount(selectedKeywordCount + 1);
  }
  function delKeyword(input) {
    let list = selectedKeywordList;

    let filtered = list.filter(element => element !== input);

    setSelectedKeywordListCount(selectedKeywordCount - 1);
    setSelectedKeywordList(filtered);
  }
  return (
    <>
      <FullScreenBlack
        onClick={props.closeSideBar}
        isSideBarOpen={props.isSideBarOpen}
      />
      <SideBarCase isSideBarOpen={props.isSideBarOpen}>
        <ButtonCase>
          <CompleteButton>완료</CompleteButton>
          <CancelButton onClick={props.closeSideBar}>취소</CancelButton>
        </ButtonCase>
        <KeywordTitleCase>
          키워드 선택
          <KeywordCounterCaseF
            selectedKeywordListLen={selectedKeywordCount}
          ></KeywordCounterCaseF>
        </KeywordTitleCase>

        <KeywordToggleGroup
          addKeyword={addKeyword}
          delKeyword={delKeyword}
          selectedKeywordCount={selectedKeywordCount}
        />
      </SideBarCase>
    </>
  );
}

const forwardedRefSideBar = React.forwardRef(SideBar);

export default forwardedRefSideBar;
