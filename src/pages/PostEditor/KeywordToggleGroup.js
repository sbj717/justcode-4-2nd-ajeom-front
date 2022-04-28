import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import KeywordToggle from './KeywordToggle';

function KeywordToggleGroup(props) {
  const [keywordList, setKeywordList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const SearchBoxRef = useRef();
  useEffect(() => {
    SearchBoxRef.current.addEventListener(
      'input',
      function () {
        setSearchText(SearchBoxRef.current.innerText);
      },
      false
    );

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
        {keywordList.map((c, index) => {
          if (index < 7) {
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
          }
        })}
      </KeywordWrapper>
      <SearchBox
        contentEditable="true"
        placeholder="검색어를 입력하세요."
        spellCheck="false"
        ref={SearchBoxRef}
      ></SearchBox>
      <KeywordWrapper>
        {keywordList.map((c, index) => {
          if (searchText.length > 0 && c.name.includes(searchText)) {
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
          }
        })}
      </KeywordWrapper>
    </>
  );
}

export default KeywordToggleGroup;
const KeywordWrapper = styled.div`
  width: 100%;
`;

const SearchBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bbbbbb;
  width: 100%;
  outline: none;
  background-color: white;
  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block;
  }
`;
