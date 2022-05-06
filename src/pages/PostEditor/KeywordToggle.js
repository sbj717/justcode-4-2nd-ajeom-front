import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function KeywordToggleGroup(props) {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    if (checked) {
      setChecked(false);
      props.delKeyword(props.id);
    } else {
      if (props.selectedKeywordCount < 3) {
        setChecked(true);
        props.addKeyword(props.id);
      }
    }
  }
  return (
    <KeywordButton sw={props.sw} checked={checked} onClick={toggleChecked}>
      {props.keywordName}
    </KeywordButton>
  );
}

export default KeywordToggleGroup;

const KeywordButton = styled.button`
  display: ${props => (props.sw ? '' : 'none')};
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
