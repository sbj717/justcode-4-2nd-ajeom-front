import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

function ProfileBookCard({ card }) {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/book/${card.id}`); //추후 논의 후 재설정 필요
  };

  return (
    <CardWrapper>
      <CardCover onClick={goToPost} bookcover_url={card.bookcover_url}>
        {/* <img src={card.bookcover_url} alt="" /> */}
        <span className="creaseOne" />
        <span className="creaseTwo" />
        <div>
          <h2>{card.title}</h2>
          <h3>{card.nickname}</h3>
        </div>
        <p>brunch book</p>
      </CardCover>
      <CardSummary>
        <p>brunch book</p>
        <h2 onClick={goToPost}>{card.title}</h2>
      </CardSummary>
    </CardWrapper>
  );
}

export default ProfileBookCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 400px;
  margin: 35px 35px 0px 0px;
`;

const CardCover = styled.div`
  ${props => {
    return css`
      background-image: url(${props.bookcover_url});
    `;
  }}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 210px;
  height: 300px;
  border-radius: 3px 7px 7px 3px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  .creaseOne {
    background-color: black;
    width: 1px;
    height: 300px;
    position: absolute;
    opacity: 20%;
    left: 9px;
  }
  .creaseTwo {
    background-color: white;
    width: 2px;
    height: 300px;
    position: absolute;
    opacity: 20%;
    left: 10px;
  }
  img {
    z-index: 0;
    width: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 118px;
    height: 160px;
    padding: 10px 12px;
    background-color: white;
    position: absolute;
    z-index: 1;
    h2 {
      font-size: 17px;
      font-weight: 100;
      line-height: 24px;
      color: black;
    }
    h3 {
      font-size: 12px;
      font-weight: 100;
      padding-bottom: 3px;
      color: gray;
    }
  }
  p {
    font-size: 11px;
    font-weight: 700;
    position: absolute;
    top: 273px;
    color: white;
  }
`;

const CardSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 210px;
  p {
    font-size: 10px;
    font-weight: 700;
    padding-bottom: 0px;
    color: #959595;
    margin-bottom: 5px;
  }
  h2 {
    width: 210px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #333333;
    cursor: pointer;
  }
`;
