import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import KeywordToggle from './KeywordToggle';

function KeywordToggleGroup(props) {
  const [keywordList, setKeywordList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/keyword', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setKeywordList(data.keywords);
      });
  }, []);

  return (
    <>
      <KeywordWrapper>
        {keywordList.map(c => {
          return (
            <KeywordToggle
              key={c.id}
              id={c.id}
              keywordName={c.name}
              addKeyword={props.addKeyword}
              delKeyword={props.delKeyword}
              selectedKeywordCount={props.selectedKeywordCount}
            ></KeywordToggle>
          );
        })}
      </KeywordWrapper>
    </>
  );
}

export default KeywordToggleGroup;
const KeywordWrapper = styled.div`
  width: 100%;
`;
