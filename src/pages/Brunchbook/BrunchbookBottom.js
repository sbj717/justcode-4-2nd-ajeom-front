import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import BrunchbookCard from './BrunchbookCard';
import { BASE_URL } from '../../config';
function BrunchbookBottom(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/book/${props.id}/post`)
      .then(res => res.json())
      .then(res => setPostList(res.postList));
  }, []);

  const [exist, setExist] = useState(false);
  const [rise, setRise] = useState('20');
  const [fade, setFade] = useState('0');
  const [delay, setDelay] = useState('2800');

  const bookListMotion = () => {
    setExist(true);
    setRise('0');
    setFade('100');
    setDelay(null);
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

  useInterval(bookListMotion, delay);

  return (
    <BookBottomContainer
      style={{
        transform: `translateY(${rise}px)`,
        opacity: `${fade}%`,
      }}
    >
      {exist && (
        <div>
          {postList.map((card, Sequence) => (
            <BrunchbookCard key={card.id} Sequence={Sequence + 1} card={card} />
          ))}
        </div>
      )}
    </BookBottomContainer>
  );
}

export default BrunchbookBottom;

const BookBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease 0.5s;
`;
