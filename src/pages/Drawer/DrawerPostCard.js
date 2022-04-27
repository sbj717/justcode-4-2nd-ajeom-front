import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function DrawerPostCard({ card }) {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const newSummary = (card.post_summary + '').substring(0, 115) + '⋯';
    setSummary(newSummary);
  }, [card.post_summary, card.sequence]);

  return (
    <CardContainer>
      <CardBody>
        <CardTitle>{card.post_title}</CardTitle>
        <CardSummary>{summary}</CardSummary>
        <CardDate>
          {card.created_at[1]} {card.created_at[2]}. {card.created_at[0]}
        </CardDate>
      </CardBody>
      <CardThumbnail>
        <img src={card.post_thumbnail_url} alt="" />
      </CardThumbnail>
    </CardContainer>
  );
}

export default DrawerPostCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 200px;
  border-bottom: 1px solid #eee;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 550px;
  padding: 0px 0px 0px 0px;
`;

const CardTitle = styled.h2`
  width: 550px;
  height: 30px;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const CardSummary = styled.p`
  width: 550px;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: -1px;
  line-height: 19px;
  color: gray;
  margin-bottom: 15px;
`;

const CardDate = styled.span`
  font-size: 12px;
  font-weight: 100;
  line-height: 19px;
  color: gray;
`;

const CardThumbnail = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-left: 50px;
  margin: 40px 0px;
  img {
    width: 160px;
  }
`;
