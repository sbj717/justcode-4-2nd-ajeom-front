import React from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';
import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';
function Brunchbook() {
  const params = useParams();
  return (
    <BrunchbookWrapper>
      <Header />
      <BrunchbookTop id={params.id} />
      <BrunchbookBottom id={params.id} />
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
