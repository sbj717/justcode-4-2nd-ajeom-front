import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import KeywordToggle from './KeywordToggle';
import { BASE_URL } from '../../config';
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

    fetch(`${BASE_URL}/keyword`, {
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
                isSearch={false}
                key={c.id}
                sw={true}
                id={c.id}
                keywordName={c.name}
                addKeyword={props.addKeyword}
                delKeyword={props.delKeyword}
                selectedKeywordCount={props.selectedKeywordCount}
              />
            );
          }
        })}
      </KeywordWrapper>
      <SearchBox
        contentEditable="true"
        placeholder="검색어를 입력하세요."
        spellCheck="false"
        ref={SearchBoxRef}
      />
      <KeywordWrapper>
        {keywordList.map((c, index) => {
          let sw = false;
          if (searchText.length > 0 && c.name.includes(searchText)) {
            sw = true;
          }
          return (
            <KeywordToggle
              isSearch={true}
              sw={sw}
              key={c.id}
              id={c.id}
              keywordName={c.name}
              addKeyword={props.addKeyword}
              delKeyword={props.delKeyword}
              selectedKeywordCount={props.selectedKeywordCount}
            />
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
