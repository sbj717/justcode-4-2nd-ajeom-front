import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

function EmptyBookCard() {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/book`); //추후 논의 후 재설정 필요
  };

  return (
    <CardWrapper>
      <CardCover onClick={goToPost}>
        <AiOutlinePlus />
        <p>브런치북 만들기</p>
      </CardCover>
    </CardWrapper>
  );
}

export default EmptyBookCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 400px;
  margin: 35px 35px 0px 0px;
`;

const CardCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 210px;
  height: 300px;
  background-color: #f8f8f8;
  border: 1.5px dotted lightgray;
  border-radius: 3px 7px 7px 3px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  font-size: 32px;
  color: lightgray;
  p {
    font-size: 14px;
    font-weight: 200;
    color: gray;
    margin-top: 10px;
  }
`;
