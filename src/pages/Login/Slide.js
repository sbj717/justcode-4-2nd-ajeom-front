import React from 'react';
import styled from 'styled-components';

function Slide({ img, title, desc1, desc2 }) {
  const Item = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-center: center;
    text-align: center;
    &:nth-child(2) {
    }
  `;

  const IMGBOX = styled.div`
    width: 480px;
    margin: 0 auto;
  `;
  const IMG = styled.img`
    width: 80%;
  `;

  const Title = styled.div`
    padding: 20px 0;
    font-size: 27px;
  `;

  const Desc = styled.div`
    text-align: center;
    font-weight: 100;
    color: #999;
    span {
      line-height: 1.5;
      display: block;
      font-size: 15px;
    }
  `;

  return (
    <Item>
      <IMGBOX>
        <IMG src={img} />
      </IMGBOX>
      <Title>{title}</Title>
      <Desc>
        <span>{desc1} </span>
        <span>{desc2} </span>
      </Desc>
    </Item>
  );
}

export default Slide;
