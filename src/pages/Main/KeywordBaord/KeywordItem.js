import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function KeywordItem() {
  const [keywordLists, setKeywordLists] = useState({
    keywordList: [{ id: 0, mainKeyword: [] }],
  });

  useEffect(() => {
    fetch('/data/keywords.json')
      .then(res => res.json())
      .then(data => setKeywordLists(data));
  }, []);

  return (
    <>
      {keywordLists.keywordList[0].mainKeyword.map(data => (
        <ItemWrap>
          <ItemText key={data.id}>{data.keyword}</ItemText>
        </ItemWrap>
      ))}
    </>
  );
}

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  padding: 0 2.5%;
  height: 120px;
  text-align: center;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: #00c3be;
    border: 1px solid #00c3be;
  }
`;

const ItemText = styled.div`
  /* position: absolute;
  top: 45%;
  right: 0;
  left: 0; */
  word-wrap: break-word;
`;

export default KeywordItem;
