import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

function DrawerPostCard({ card }) {
  const [summary, setSummary] = useState('');
  const [dateArr, setDateArr] = useState([]);

  useEffect(() => {
    const newSummary = (card.summary + '').substring(0, 115) + '⋯';
    setSummary(newSummary);
  }, [card.summary]);

  useEffect(() => {
    const newDate = card.created_at;
    const dateArr = (newDate + '').split('T')[0].split('-');
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let selectedMonthName = months[Number(dateArr[1] - 1)];
    dateArr[1] = selectedMonthName;
    setDateArr(dateArr);
  }, [card.created_at]);

  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/detail/${card.id}`);
  };

  return (
    <CardContainer>
      <CardBody>
        <CardTitle onClick={goToPost}>{card.title}</CardTitle>
        <CardSummary onClick={goToPost}>{summary}</CardSummary>
        <CardDate>
          {dateArr[1]} {dateArr[2]}. {dateArr[0]}
        </CardDate>
      </CardBody>
      <CardThumbnail onClick={goToPost} bookcover_url={card.thumbnail_url} />
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
  cursor: pointer;
`;

const CardSummary = styled.p`
  width: 550px;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: -1px;
  line-height: 19px;
  color: gray;
  margin-bottom: 15px;
  cursor: pointer;
`;

const CardDate = styled.span`
  font-size: 12px;
  font-weight: 100;
  line-height: 19px;
  color: gray;
`;

const CardThumbnail = styled.div`
  ${props => {
    return css`
      background-image: url(${props.bookcover_url});
    `;
  }}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-left: 50px;
  margin: 40px 0px;
  cursor: pointer;
  img {
    width: 160px;
  }
`;
