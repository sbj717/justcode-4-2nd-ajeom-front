import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../../List/Spinner';
import { useNavigate } from 'react-router-dom';
import { localhost } from '../../../config';

function PostBox({ userId }) {
  const navigate = useNavigate();
  const target = useRef(null);
  const [count, setCount] = useState(2);
  const [spinner, setSpinner] = useState(true);
  const [lists, setLists] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${localhost}/list/profile/${userId}?page=1&pageSize=6`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setLists(data);
      });
  }, [userId]);

  const fetchData = async () => {
    setTimeout(async () => {
      await fetch(
        `${localhost}/list/profile/${userId}?page=${count}&pageSize=6`
      )
        .then(res => res.json())
        .then(data => {
          if (data !== null) {
            setLists(lists.concat(data));
          } else {
            setSpinner(false);
          }
        });
      setCount(count + 1);
    }, 700);
  };
  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(handleObserver, { threshold: 0.4 });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [lists]);

  const handleObserver = async ([entry], observer) => {
    if (entry.isIntersecting) {
      await fetchData();
    }
  };
  return (
    <PostContainer ref={target}>
      {lists === null ||
        lists.map(lists => (
          <Post
            key={lists.id}
            onClick={() => {
              navigate(`/detail/${lists.id}`);
            }}
          >
            <Container>
              <Content>
                <Title>{lists.title}</Title>
                <Text>{lists.summary}</Text>
              </Content>
              <ImgBox backgroundUrl={lists.thumbnail_url} />
            </Container>
          </Post>
        ))}
      <div ref={target} style={{ border: '1px solid transparent' }} />
      <SpinnerWrapper>{spinner && <Spinner />}</SpinnerWrapper>
    </PostContainer>
  );
}

export default PostBox;

const PostContainer = styled.section`
  display: block;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: 0;
    }
  }
`;
const Title = styled.span`
  font-size: 20px;
  padding-bottom: 15px;
`;

const Post = styled.div`
  display: block;
  cursor: pointer;
  &:hover ${Title} {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 24px 0 27px;
  border-bottom: 1px solid #eee;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    padding-bottom: 15px;
  }
  p {
  }
`;

const Text = styled.p`
  overflow: hidden;
  display: -webkit-box;
  max-height: 80px;
  padding-top: 5px;
  font-size: 14px;
  line-height: 21px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: #959595;
`;
const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        background-image: url(${props.backgroundUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      `;
    }
  }}
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;
