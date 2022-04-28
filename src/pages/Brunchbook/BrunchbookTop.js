import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscArrowRight } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
function BrunchbookTop(props) {
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [releaseDate, setReleaseDate] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [delay, setDelay] = useState(700);
  const [coordinate, setCoordinate] = useState([
    '500',
    '160',
    '-178',
    '-500',
    '-530',
  ]);
  const [caseDisplay, setCaseDisplay] = useState([
    true,
    true,
    false,
    false,
    false,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonColor, setButtonColor] = useState(['#d9d9d9', '#d9d9d9']);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/user/myProfile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });

    fetch(`http://localhost:8000/book/${props.id}`)
      .then(res => res.json())
      .then(res => {
        setBookInfo(res.bookInfo[0]);
        const newDate = bookInfo.created_at;
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
        setReleaseDate(dateArr);
      });
  }, [bookInfo.created_at]);

  const BrunchbookMotion = () => {
    if (currentStep === 0) {
      setCoordinate(['600', '60', '-78', '-600', '-630']);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setCoordinate(['600', '-170', '-508', '-830', '-860']);
      setCurrentStep(2);
      setDelay(500);
    } else if (currentStep === 2) {
      setCaseDisplay([false, true, true, true, true]);
      setCoordinate(['-170', '-170', '-170', '-170', '-170']);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setDelay(null);
    }
  };

  function delBook() {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:8000/book/${props.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        alert('브런치북이 삭제되었습니다.');
        navigate(`/`);
        window.scrollTo(0, 0);
      });
  }
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(BrunchbookMotion, delay);

  const slideLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(1);
      setButtonColor(['#eeeeee', '#d9d9d9']);
    } else if (currentSlide === -1) {
      setCurrentSlide(0);
      setButtonColor(['#d9d9d9', '#d9d9d9']);
    }
  };

  const slideRight = () => {
    if (currentSlide === 0) {
      setCurrentSlide(-1);
      setButtonColor(['#d9d9d9', '#eeeeee']);
    } else if (currentSlide === 1) {
      setCurrentSlide(0);
      setButtonColor(['#d9d9d9', '#d9d9d9']);
    }
  };

  return (
    <BrunchbookTopWrapper>
      <BrunchbookTopCarousel>
        <BrunchbookTopButton>
          <button onClick={slideLeft} style={{ color: `${buttonColor[0]}` }}>
            <VscArrowLeft />
          </button>
          <button onClick={slideRight} style={{ color: `${buttonColor[1]}` }}>
            <VscArrowRight />
          </button>
        </BrunchbookTopButton>
        <BrunchbookTopSlide
          style={{
            transform: `translateX(${currentSlide * 340}px)`,
          }}
        >
          <BookCaseWrapper
            style={{
              transform: `translateX(${coordinate[0]}px)`,
            }}
          >
            {caseDisplay[0] && (
              <BookCase>
                <div className="stamp">
                  brunch
                  <br />
                  book
                </div>
                <p>
                  First Edition
                  <br /> Release date. {releaseDate[1]} {releaseDate[2]}.{' '}
                  {releaseDate[0]}
                </p>
                <img src="/images/bookcase.png" alt="" />
              </BookCase>
            )}
          </BookCaseWrapper>
          <BookCover
            bookcover_url={bookInfo.bookcover_url}
            style={{ transform: `translateX(${coordinate[1]}px)` }}
          >
            {/* <img src={bookInfo.bookcover_url} alt="" /> */}
            <span className="creaseOne" />
            <span className="creaseTwo" />
            <div>
              <h2>{bookInfo.title}</h2>
              <h3>{bookInfo.username}</h3>
            </div>
            <p>brunch book</p>
          </BookCover>
          <BookPageOneWrapper
            style={{ transform: `translateX(${coordinate[2]}px)` }}
          >
            {caseDisplay[2] && (
              <BookPageOne>
                <h4>브런치북 소개</h4>
                <p>{bookInfo.book_description}</p>
              </BookPageOne>
            )}
          </BookPageOneWrapper>
          <BookPageTwoWrapper
            style={{ transform: `translateX(${coordinate[3]}px)` }}
          >
            {caseDisplay[3] && (
              <BookPageTwo>
                <div className="bookCoverWrapper">
                  <img
                    className="bookCover"
                    src={bookInfo.bookcover_url}
                    alt=""
                  />
                </div>
                <div className="userWrapper">
                  <div className="userImageWrapper">
                    <img src={bookInfo.userimage_url} alt="" />
                  </div>
                  <h3>{bookInfo.username}</h3>
                  <p className="userDescription">{bookInfo.user_description}</p>
                </div>
              </BookPageTwo>
            )}
          </BookPageTwoWrapper>
          <BookReleaseDateWrapper
            style={{ transform: `translateX(${coordinate[4]}px)` }}
          >
            {caseDisplay[4] && (
              <BookReleaseDate>
                <p>
                  Release date. {releaseDate[1]} {releaseDate[2]}.{' '}
                  {releaseDate[0]}
                </p>
              </BookReleaseDate>
            )}
          </BookReleaseDateWrapper>
        </BrunchbookTopSlide>
      </BrunchbookTopCarousel>
      {bookInfo.user_id == userInfo.id ? (
        <DelButton mainColor={'#00c3bd'} onClick={delBook}>
          삭제
        </DelButton>
      ) : null}
    </BrunchbookTopWrapper>
  );
}

export default BrunchbookTop;

const BrunchbookTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin-top: 40px;
`;

const BrunchbookTopCarousel = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  position: relative;
`;

const BrunchbookTopButton = styled.div`
  position: absolute;
  top: -40px;
  left: 1000px;
  button {
    font-size: 27px;
    font-weight: 100;
    color: lightgray;
    border: 0px;
    margin: 0px 5px;
    background-color: transparent;
  }
`;

const BrunchbookTopSlide = styled.div`
  display: flex;
  align-items: center;
  height: 470px;
  transform: translate(0px, 0px);
  transition: ease 0.3s;
`;

const BookCaseWrapper = styled.div`
  word-wrap: break-word;
  width: 350px;
  height: 470px;
  background-color: transparent;
  transform: translate(500px, 0px);
  transition: ease 0.5s;
  position: relative;
  z-index: 10;
`;

const BookCase = styled.div`
  .stamp {
    width: 80px;
    height: 80px;
    border: 1.5px solid black;
    border-radius: 40px;
    text-align: center;
    padding: 23px 0px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    position: absolute;
    top: 40px;
    right: 50px;
  }
  p {
    width: 150px;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: black;
    transform: rotate(90deg);
    position: absolute;
    top: 85px;
    left: -30px;
  }
`;

const BookCover = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  ${props => {
    if (props.bookcover_url) {
      return css`
        opacity: 1;
        background-image: url(${props.bookcover_url});
      `;
    } else {
      return css``;
    }
  }}
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 320px;
  height: 450px;
  padding: 30px;
  margin-right: 18px;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -10px lightgray;
  overflow: hidden;
  z-index: 9;
  transform: translate(160px, 10px);
  transition: ease 0.5s;
  .creaseOne {
    background-color: black;
    width: 1px;
    height: 450px;
    position: absolute;
    opacity: 20%;
    left: 12px;
  }
  .creaseTwo {
    background-color: white;
    width: 2px;
    height: 450px;
    position: absolute;
    opacity: 20%;
    left: 13px;
  }
  img {
    z-index: 0;
    width: 600px;
  }
  div {
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
    height: 240px;
    padding: 13px 15px;
    background-color: white;
    position: absolute;
    z-index: 1;
    h2 {
      font-size: 27px;
      font-weight: 100;
      line-height: 35px;
      color: black;
    }
    h3 {
      font-size: 14px;
      font-weight: 100;
      padding-bottom: 5px;
      color: gray;
    }
  }
  p {
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: 410px;
    color: white;
  }
`;

const BookPageOneWrapper = styled.div`
  width: 320px;
  height: 450px;
  margin-right: 2px;
  transform: translate(-178px, 20px);
  transition: ease 0.5s;
  z-index: 8;
`;

const BookPageOne = styled.div`
  width: 320px;
  height: 450px;
  padding: 30px;
  background-color: white;
  margin-right: 2px;
  box-shadow: 0px 10px 10px -10px lightgray;
  word-wrap: break-word;
  h4 {
    font-size: 14px;
    font-weight: 200;
    padding-bottom: 40px;
  }
  p {
    font-size: 13px;
    font-weight: 200;
    line-height: 21px;
  }
`;

const BookPageTwoWrapper = styled.div`
  width: 320px;
  height: 450px;
  margin-right: 2px;
  transform: translate(-500px, 30px);
  transition: ease 0.7s;
  z-index: 7;
`;

const BookPageTwo = styled.div`
  word-wrap: break-word;
  width: 320px;
  height: 450px;
  background-color: white;
  margin-right: 2px;
  box-shadow: 0px 10px 10px -10px lightgray;

  .bookCoverWrapper {
    width: 320px;
    height: 100px;
    overflow: hidden;
    .bookCover {
      width: 100%;
    }
  }
  .userWrapper {
    width: 330px;
    height: 350px;
    padding: 30px;
    position: relative;
    .userImageWrapper {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      position: absolute;
      top: -40px;
      right: 30px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    h3 {
      font-size: 18px;
      font-weight: 200;
      padding: 5px 0px 15px 0px;
    }
    p {
      font-size: 13px;
      font-weight: 100;
    }
    .userDescription {
      padding-top: 15px;
    }
  }
`;

const BookReleaseDateWrapper = styled.div`
  transform: translate(-530px, 40px);
  transition: ease 0.8s;
  z-index: 6;
`;

const BookReleaseDate = styled.div`
  background-color: transparent;

  position: relative;

  p {
    width: 150px;
    font-size: 12px;
    font-weight: 200;
    color: gray;
    transform: rotate(90deg);
    position: absolute;
    top: 155px;
    left: -60px;
  }
`;

const DelButton = styled.button`
  font-size: 13px;
  border: 1.3px solid
    ${props => {
      return props.mainColor;
    }};
  border-radius: 20px;
  padding: 0.3rem 1.5rem;
  margin-top: 30px;
  background-color: #ffffff;
  color: ${props => {
    return props.mainColor;
  }};
  font-weight: 300;
  cursor: pointer;
  float: right;
`;
