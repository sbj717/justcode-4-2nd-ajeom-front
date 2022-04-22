import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    if (checked) {
      setChecked(false);
      props.delKeyword(props.keywordName);
    } else {
      if (props.selectedKeywordCount < 3) {
        setChecked(true);
        props.addKeyword(props.keywordName);
      }
    }
  }
  return (
    <>
      <KeywordButton checked={checked} onClick={toggleChecked}>
        {props.keywordName}
      </KeywordButton>
    </>
  );
}

export default KeywordToggleGroup;
