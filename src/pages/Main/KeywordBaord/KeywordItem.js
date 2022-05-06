import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function KeywordItem({ data }) {
  const navigate = useNavigate();

  const goToList = () => {
    navigate(`/list/${data.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <AllWrap>
      <ItemWrap onClick={goToList}>
        <ItemText>{data.name}</ItemText>
      </ItemWrap>
    </AllWrap>
  );
}

const AllWrap = styled.section`
  display: flex;
  justify-content: center;
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.6rem 1.4rem;
  text-align: center;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  line-height: 18px;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #00c3be;
    border: 1px solid #00c3be;
  }
`;

const ItemText = styled.div`
  word-wrap: break-word;
  width: 4.56rem;
  color: #333333;
  font-weight: 200;
`;

export default KeywordItem;
