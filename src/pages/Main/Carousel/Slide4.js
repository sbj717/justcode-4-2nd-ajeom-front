import React from 'react';
import styled from 'styled-components';

function Slide4() {
  return (
    <SlideWrapper>
      <SectionOne>
        <ArticleOne>
          <h3>화이트 팬츠는 언제나 최선이자 최고입니다.</h3>
          <p>by Mickey</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </ArticleOne>
      </SectionOne>
      <SectionTwo>
        <ArticleTwo>
          <h3>
            그 자식 우리에게
            <br />
            사기 친 거였어
          </h3>
          <p>by 뉴델리 뉴라이프</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1597564684442-b603ab8dcdcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </ArticleTwo>
        <ArticleThree>
          <h3>
            제주 남자와 귤<br />
            따러 가지 않을래
          </h3>
          <p>by 이상우</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1611329646571-689ddf8bfee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </ArticleThree>
        <ArticleFour>
          <h3>
            환상의 짝꿍,
            <br />
            오이 양파
          </h3>
          <p>by 야채작가</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1634934044791-44efcd71ac04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </ArticleFour>
      </SectionTwo>
    </SlideWrapper>
  );
}

export default Slide4;

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
    font-size: 28px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
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
    font-size: 21px;
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
    font-size: 21px;
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
    font-size: 21px;
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
