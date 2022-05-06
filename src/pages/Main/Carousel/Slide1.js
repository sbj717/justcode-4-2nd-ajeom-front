import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Slide1() {
  const [bookInfo, setBookInfo] = useState({});
  const [releaseDate, setReleaseDate] = useState([]);

  useEffect(() => {
    fetch('/data/brunchbook_data.json')
      .then(res => res.json())
      .then(res => {
        setBookInfo(res);
        const newDate = bookInfo.created_at;
        const dateArr = (newDate + '').split(' ')[0].split('-');
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
        setReleaseDate(dateArr);
      });
  }, [bookInfo.created_at]);

  const navigate = useNavigate();

  const goToBook = () => {
    navigate('/book/1');
    window.scrollTo(0, 0);
  };

  return (
    <SlideWrapper>
      <SectionOne>
        <HoverGray onClick={goToBook}>
          <img src="/images/bookdimming.png" alt="" />
        </HoverGray>
        <ArticleOne>
          <div className="ground" />
          <img className="bookShadow" src="/images/bookshadow.png" alt="" />
          <div className="bookCover">
            <img
              className="bookImage"
              src="https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />

            <span className="creaseOne" />
            <span className="creaseTwo" />
            <div className="bookContent">
              <h3>{bookInfo.title}</h3>
              <h4>임경훈</h4>
            </div>
            <div className="logo">brunch book</div>
          </div>
          <div className="releaseDate">
            <p>
              First Edition
              <br /> Release date. {releaseDate[1]} {releaseDate[2]}.{' '}
              {releaseDate[0]}
            </p>
          </div>
        </ArticleOne>
      </SectionOne>
      <SectionTwo>
        <ArticleTwo
          onClick={() => {
            navigate('/detail/1');
            window.scrollTo(0, 0);
          }}
        >
          <h3>
            나는야 행운의
            <br />
            고양이!
          </h3>
          <p>by 임경훈</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt=""
          />
        </ArticleTwo>
        <ArticleThree
          onClick={() => {
            navigate('/detail/3');
            window.scrollTo(0, 0);
          }}
        >
          <h3>
            [미식일기]
            <br />
            느릅나무, 강릉
          </h3>
          <p>by 정한솔</p>
          <div className="grayOver" />
          <img
            src="https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </ArticleThree>
      </SectionTwo>
    </SlideWrapper>
  );
}

export default Slide1;

const SlideWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 520px;
`;

const SectionOne = styled.div`
  width: 480px;
  height: 520px;
  position: relative;
`;

const SectionTwo = styled.div`
  width: 480px;
  height: 520px;
`;

const HoverGray = styled.div`
  width: 480px;
  height: 520px;
  position: absolute;
  z-index: 5;
  background-color: black;
  opacity: 0%;
  transition: ease 0.7s;
  cursor: pointer;
  img {
    width: 480px;
    height: 520px;
  }
  &:hover {
    opacity: 15%;
  }
`;

const ArticleOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 520px;
  background: linear-gradient(#f4f4f4, #dedede);
  overflow: hidden;
  position: relative;
  z-index: 2;
  .ground {
    width: 100%;
    height: 150px;
    background-color: #f6f6f6;
    position: absolute;
    top: 370px;
  }
  .bookShadow {
    position: absolute;
    bottom: 86px;
    right: 0px;
  }
  .bookCover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 324px;
    background-color: red;
    border-radius: 4px 8px 8px 4px;
    z-index: 3;
    position: relative;
    overflow: hidden;
    .bookImage {
      width: 120%;
      position: absolute;
    }
    .creaseOne {
      width: 1px;
      height: 100%;
      background-color: black;
      opacity: 20%;
      position: absolute;
      left: 10px;
      z-index: 3;
    }
    .creaseTwo {
      width: 2px;
      height: 100%;
      background-color: white;
      opacity: 20%;
      position: absolute;
      left: 11px;
      z-index: 3;
    }
    .bookContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 130px;
      height: 172px;
      padding: 15px;
      background-color: white;
      z-index: 3;
      h3 {
        font-size: 20px;
        font-weight: 300;
      }
      h4 {
        font-size: 14px;
        font-weight: 200;
      }
    }
    .logo {
      font-size: 12px;
      font-weight: 500;
      color: white;
      position: absolute;
      top: 285px;
      z-index: 3;
    }
  }
  .releaseDate {
    position: absolute;
    bottom: 35px;
    p {
      text-align: center;
      font-size: 12px;
      font-weight: 100;
      line-height: 20px;
    }
  }
`;

const ArticleTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 28px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top: 80px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    position: absolute;
    top: 180px;
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
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 260px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 28px;
    font-weight: 400;
    color: white;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top: 80px;
    z-index: 2;
  }
  p {
    font-size: 12px;
    color: white;
    position: absolute;
    top: 180px;
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
