import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import KeywordToggle from './KeywordToggle';
let KeywordCase = styled.div`
  width: 100%;
`;

let KeywordButton = styled.button`
  border-radius: 20px;
  padding: 0.3rem 1.3rem;
  font-weight: 300;
  cursor: pointer;
  font-size: 13px;
  margin-right: 7px;
  margin-bottom: 7px;
  border: 1.3px solid ${props => (props.checked ? '#00c3bd' : '#bbbbbb')};
  background-color: ${props => (props.checked ? '#00c3bd' : '#FFFFFF')};
  color: ${props => (props.checked ? '#FFFFFF' : '#bbbbbb')};
`;

function KeywordToggleGroup(props) {
  const [keywordList, setKeywordList] = useState([]);
  useEffect(() => {
    fetch('/data/keywordList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setKeywordList(data.KeywordList);
      });
  }, []);

  return (
    <>
      <KeywordCase>
        {keywordList.map(c => {
          return (
            <KeywordToggle
              key={c.key}
              keywordName={c.Name}
              addKeyword={props.addKeyword}
              delKeyword={props.delKeyword}
              selectedKeywordCount={props.selectedKeywordCount}
            ></KeywordToggle>
          );
        })}
      </KeywordCase>
    </>
  );
}

export default KeywordToggleGroup;
