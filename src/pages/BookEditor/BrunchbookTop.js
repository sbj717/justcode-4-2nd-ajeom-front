import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { BiCamera } from 'react-icons/bi';
function BrunchbookTop() {
  const [bookcover_url, setBookcover_url] = useState('');
  const [releaseDate, setReleaseDate] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [delay, setDelay] = useState(700);
  const [coordinate, setCoordinate] = useState([
    '-170',
    '-170',
    '-170',
    '-170',
    '-170',
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

  const BrunchbookMotion = () => {
    setCaseDisplay([false, true, true, true, true]);
  };

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

  return (
    <BrunchbookTopWrapper>
      <BrunchbookTopCarousel>
        <BrunchbookTopSlide>
          <BookCaseWrapper></BookCaseWrapper>
          <BookCover
            bookcover_url={bookcover_url}
            style={{ transform: `translateX(${coordinate[1]}px)` }}
          >
            {bookcover_url.length > 0 ? (
              <img src={bookcover_url} alt="" />
            ) : (
              <GraySolid></GraySolid>
            )}
            <span className="creaseOne" />
            <span className="creaseTwo" />
            <TitleField
              contentEditable="true"
              placeholder={`제목을
                입력하세요`}
              spellCheck="false"
            ></TitleField>

            <p>brunch book</p>
            <Button
              onClick={() => {
                let url = prompt('이미지 URL을 입력하세요', '');
                if (url) {
                  if (url.length > 0) {
                    setBookcover_url(url);
                  }
                }
              }}
            >
              <BiCamera size="30" />
            </Button>
          </BookCover>
          <BookPageOneWrapper
            style={{ transform: `translateX(${coordinate[2]}px)` }}
          >
            <BookPageOne>
              <h4>브런치북 소개</h4>
              <DescriptionField
                contentEditable="true"
                placeholder="브런치북 소개를 입력하세요"
                spellCheck="false"
              ></DescriptionField>
            </BookPageOne>
          </BookPageOneWrapper>
        </BrunchbookTopSlide>
      </BrunchbookTopCarousel>
    </BrunchbookTopWrapper>
  );
}

export default BrunchbookTop;
const Button = styled.button`
  border-radius: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0 0 0 0;
  border: 0px red solid;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    cursor: pointer;
  }
`;
const GraySolid = styled.button`
  position: absolute;
  background-color: lightgray;
  width: 1000px;
  height: 1600px;
`;

const TitleField = styled.div`
  font-size: 27px;
  font-weight: 100;
  line-height: 35px;
  color: black;
  cursor: text;
  outline: none;

  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block; /* For Firefox */
  }
`;

const DescriptionField = styled.div`
  font-size: 13px;
  padding: 10px;
  height: 310px;
  font-weight: 200;
  line-height: 21px;
  color: black;
  cursor: text;
  outline: none;
  border: 1px rgb(210, 210, 210) solid;

  &[contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: rgb(210, 210, 210);
    display: block; /* For Firefox */
  }
`;

const BrunchbookTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
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
`;

const BookCaseWrapper = styled.div`
  width: 350px;
  height: 470px;
  background-color: transparent;
  transform: translate(500px, 0px);

  position: relative;
  z-index: -10;
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
    transition: 1s;
    opacity: 0;
    ${props => {
      if (props.bookcover_url.length > 0) {
        return css`
          opacity: 1;
        `;
      }
    }}
  }
  div {
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
`;

const BookPageOne = styled.div`
  width: 320px;
  height: 450px;
  padding: 30px;
  background-color: white;
  margin-right: 2px;
  box-shadow: 0px 10px 10px -10px lightgray;

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
