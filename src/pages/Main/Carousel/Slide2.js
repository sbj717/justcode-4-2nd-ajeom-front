import React from 'react';
import styled from 'styled-components';

function Slide2() {
  return (
    <SlideWrapper>
      <ArticleOne>
        <h3>
          우리 아빠 차는
          <br />
          94년식
          <br />
          소나타입니다
        </h3>
        <p>by 제네시스</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1551826152-d7248d8b8a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </ArticleOne>
      <ArticleTwo>
        <h3>
          선배가 말하는
          <br />
          회사에서 쫓겨나는
          <br />
          사람들의 기준
        </h3>
        <p>by 트리플J</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </ArticleTwo>
      <ArticleThree>
        <h3>
          아버지의 친구들과
          <br />
          술을 마셨다.
        </h3>
        <p>by 현우</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
