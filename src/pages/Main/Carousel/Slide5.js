import React from 'react';
import styled from 'styled-components';

function Slide2() {
  return (
    <SlideWrapper>
      <ArticleOne>
        <h3>무제</h3>
        <p>by none</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </ArticleOne>
      <ArticleTwo>
        <h3>무제</h3>
        <p>by none</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </ArticleTwo>
      <ArticleThree>
        <h3>무제</h3>
        <p>by none</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </ArticleThree>
    </SlideWrapper>
  );
}

export default Slide2;

const SlideWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 520px;
  background-color: orange;
`;

const ArticleOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 520px;
  background-color: red;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 100px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    z-index: 2;
    opacity: 70%;
  }
  .grayOver {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #333;
    opacity: 20%;
    transition: ease-in-out 0.3s;
    z-index: 1;
    cursor: pointer;
  }
  img {
    position: absolute;
    height: 100%;
    transition: ease-in-out 0.3s;
  }
  &:hover {
    .grayOver {
      opacity: 40%;
    }
    img {
      transform: scale(1.1);
    }
  }
`;

const ArticleTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 520px;
  background-color: red;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 100px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    z-index: 2;
    opacity: 70%;
  }
  .grayOver {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #333;
    opacity: 20%;
    transition: ease-in-out 0.3s;
    z-index: 1;
    cursor: pointer;
  }
  img {
    position: absolute;
    height: 100%;
    transition: ease-in-out 0.3s;
  }
  &:hover {
    .grayOver {
      opacity: 40%;
    }
    img {
      transform: scale(1.1);
    }
  }
`;

const ArticleThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 520px;
  background-color: red;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 100px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    z-index: 2;
    opacity: 70%;
  }
  .grayOver {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #333;
    opacity: 20%;
    transition: ease-in-out 0.3s;
    z-index: 1;
    cursor: pointer;
  }
  img {
    position: absolute;
    height: 100%;
    transition: ease-in-out 0.3s;
  }
  &:hover {
    .grayOver {
      opacity: 40%;
    }
    img {
      transform: scale(1.1);
    }
  }
`;
