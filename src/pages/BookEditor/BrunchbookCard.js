import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

function BrunchbookCard({ card }) {
  const [chapter, setChapter] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (Number(card.sequence) < 10) {
      let chapterArr = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
      const newChapter = chapterArr[Number(card.sequence - 1)];
      setChapter(newChapter);
    } else {
      setChapter(card.sequence);
    }
    const newSummary = (card.post_summary + '').substring(0, 200) + '⋯';
    setSummary(newSummary);
  }, [card.post_summary, card.sequence]);

  return (
    <CardContainer>
      <CardIndex>{chapter}</CardIndex>
      <CardBody>
        <CardTitle>{card.post_title}</CardTitle>
        <CardSummary>{summary}</CardSummary>
      </CardBody>
      <CardThumbnail bookcover_url={card.post_thumbnail_url}></CardThumbnail>
    </CardContainer>
  );
}

export default BrunchbookCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 170px;
  border-bottom: 1px solid lightgray;
`;

const CardIndex = styled.div`
  width: 30px;
  padding: 30px 20px 0px 0px;
  font-size: 20px;
  font-weight: 300;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 500px;
  padding: 30px 0px 0px 0px;
`;

const CardTitle = styled.h2`
  width: 500px;
  height: 30px;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const CardSummary = styled.p`
  width: 500px;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: -1px;
  line-height: 19px;
  color: gray;
`;

const CardThumbnail = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  ${props => {
    if (props.bookcover_url.length > 0) {
      return css`
        opacity: 1;
        background-image: url(${props.bookcover_url});
      `;
    } else {
      return css``;
    }
  }}

  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-left: 50px;
  margin: 25px 0px;
  img {
    width: 160px;
  }
`;
