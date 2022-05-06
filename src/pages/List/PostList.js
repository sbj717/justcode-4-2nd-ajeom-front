import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

function PostList({ posts }) {
  const navigate = useNavigate();

  const clickPost = () => {
    navigate(`/detail/${posts.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <CardWrapper onClick={clickPost}>
      <TextWrapper>
        <CardTitle>{posts.title}</CardTitle>
        <CardText>{posts.summary}</CardText>
        <CardWriter>
          <By>by</By> {posts.nickname}
        </CardWriter>
      </TextWrapper>
      <ImgWrapper thumbnail_url={posts.thumbnail_url} />
    </CardWrapper>
  );
}

const fadeIn = keyframes`
from {
      opacity: 0;
      transform: translateY(1.5rem);
    }
    to {
      opacity: 1;
      transform: 0;
    }
`;

const CardWrapper = styled.section`
  display: flex;
  width: 700px;
  margin: 0 2rem 1rem 0;
  padding: 1.9rem 1.5rem;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  animation: ${fadeIn} 0.5s ease-in-out;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  margin-right: 1.5rem;
`;

const CardTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 200;

  &:hover {
    text-decoration: underline;
  }
`;

const CardText = styled.p`
  display: -webkit-box;
  width: 31rem;
  height: 3em;
  margin-bottom: 1rem;
  color: #333333;
  font-weight: 200;
  font-size: 0.9rem;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardWriter = styled.div`
  color: #959595;
  font-size: 0.8rem;
  font-weight: 200;
`;

const By = styled.span`
  margin-right: 0.2rem;
  color: #bfbfbf;
  font-family: Georgia;
  font-style: italic;
`;

const ImgWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  ${props => {
    return css`
      background-image: url(${props.thumbnail_url});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `;
  }}
`;

export default PostList;
