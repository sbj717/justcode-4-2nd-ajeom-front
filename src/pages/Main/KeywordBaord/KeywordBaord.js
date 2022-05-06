import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeywordItem from './KeywordItem';
import { getMainKeywords } from '../../../apis/keyword';

function KeywordBaord() {
  const [keywordList, setKeywordList] = useState([]);

  useEffect(() => {
    getMainKeywords().then(data => setKeywordList(data.keywords));
  }, []);

  return (
    <KeywordBoardWrapper>
      <BoardTitle>AJEOM KEYWORD</BoardTitle>
      <BoardDesc>키워드로 분류된 다양한 글 모음</BoardDesc>
      <Board>
        {keywordList.map(data => (
          <KeywordItem key={data.id} data={data} />
        ))}
      </Board>
    </KeywordBoardWrapper>
  );
}

const KeywordBoardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoardTitle = styled.h3`
  width: 266px;
  margin-top: 150px;
  text-align: center;
  font-family: 'Amiri', serif;
  letter-spacing: 7px;
  font-size: 18px;
`;
const BoardDesc = styled.div`
  width: 149px;
  margin-top: 17px;
  text-align: center;
  font-size: 11px;
  color: #bebfbf;
  font-weight: 500;
`;
const Board = styled.div`
  display: flex;
  width: 960px;
  flex-wrap: wrap;
  margin: 3rem 0 2rem 0;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
`;

export default KeywordBaord;
