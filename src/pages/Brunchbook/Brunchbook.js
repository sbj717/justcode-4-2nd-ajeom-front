import React from 'react';
import styled from 'styled-components';
import BrunchbookTop from './BrunchbookTop';
import BrunchbookBottom from './BrunchbookBottom';
import Header from '../components/Header/Header';

function Brunchbook() {
  return (
    <BrunchbookWrapper>
      <Header />
      <BrunchbookTop />
      <BrunchbookBottom />
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
