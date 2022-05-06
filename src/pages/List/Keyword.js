import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Keyword({ data }) {
  const navigate = useNavigate();

  const goToList = () => {
    navigate(`/list/${data.id}`);
    window.scrollTo(0, 0);
  };

  return <KeywordBtn onClick={goToList}>{data.name}</KeywordBtn>;
}

const KeywordBtn = styled.button`
  margin: 0 0.5rem;
  padding: 0.2rem 0.7rem;
  color: #959595;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 200;
  cursor: pointer;
`;

export default Keyword;
