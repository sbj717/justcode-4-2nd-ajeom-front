import React from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';
import { useParams } from 'react-router-dom';
function Brunchbook() {
  const params = useParams();
  return (
    <BrunchbookWrapper>
      <BrunchbookTop bookId={params.id} />
      <BrunchbookBottom bookId={params.id} />
    </BrunchbookWrapper>
  );
}

export default Brunchbook;

const BrunchbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#f8f8f8, white);
  margin-bottom: 100px;
`;
