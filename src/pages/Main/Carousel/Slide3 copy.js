import React from 'react';
import styled from 'styled-components';

function Slide3() {
  return (
    <SlideWrapper>
      <SectionOne>
        <ArticleOne>
          <h3>제목</h3>
          <p>작가</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt=""
          />
        </ArticleOne>
      </SectionOne>
      <SectionTwo>
        <ArticleTwo>
          <h3>제목</h3>
          <p>작가</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt=""
          />
        </ArticleTwo>
        <ArticleThree>
          <h3>제목</h3>
          <p>작가</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt=""
          />
        </ArticleThree>
        <ArticleFour>
          <h3>제목</h3>
          <p>작가</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt=""
          />
        </ArticleFour>
      </SectionTwo>
    </SlideWrapper>
  );
}

export default Slide3;

const SlideWrapper = styled.div`
  width: 960px;
  height: 520px;
  background-color: yellow;
`;

const SectionOne = styled.div`
  width: 960px;
  height: 320px;
  background-color: aqua;
`;

const SectionTwo = styled.div`
  display: flex;
  width: 960px;
  height: 200px;
  background-color: aqua;
`;

const ArticleOne = styled.div`
  width: 960px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 80px;
    top: 150px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    top: 350px;
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
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 30px;
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
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 30px;
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
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 30px;
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
