import React from 'react';
import styled from 'styled-components';

function Slide3() {
  return (
    <SlideWrapper>
      <ArticleOne>
        <h3>치앙마이, 한 달 살게?</h3>
        <p>by 오진미</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1650477250351-a7685316430f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt=""
        />
      </ArticleOne>
      <ArticleTwo>
        <h3>
          거품 없는 카푸치노
          <br />
          주세요
        </h3>
        <p>by 작은꿀벌</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1513976346801-073c74eefe0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </ArticleTwo>
      <ArticleThree>
        <h3>
          오늘의 집이 아니라 <br />
          나의 집
        </h3>
        <p>by 투미</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </ArticleThree>
      <ArticleFour>
        <h3>
          누구나 쉽게 따라하는
          <br />
          라이트룸
        </h3>
        <p>by 플라스틱 러버</p>
        <div className="grayOver" />
        <img
          src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </ArticleFour>
    </SlideWrapper>
  );
}

export default Slide3;

const SlideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 960px;
  height: 520px;
  background-color: green;
`;

const ArticleOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
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
    width: 100%;
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
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
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
    width: 100%;
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
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
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
    width: 100%;
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

const ArticleFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
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
    width: 100%;
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
