import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostList({ posts }) {
  const navigate = useNavigate();

  const clickPost = () => {
    navigate(`/detail/${posts.id}`);
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
      <ImgWrapper>
        <CardImg src={posts.thumbnail_url} />
      </ImgWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  width: 700px;
  display: flex;
  padding: 1.9rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
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
  margin-bottom: 1rem;
  color: #333333;
  font-weight: 200;
  font-size: 0.9rem;
  line-height: 1.5em;
  height: 3em;
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
  font-family: Georgia;
  font-style: italic;
  color: #bfbfbf;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 8rem;
`;

export default PostList;
