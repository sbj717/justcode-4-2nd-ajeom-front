import React, { useState, useEffect } from 'react';
import InfoBox from './ProfileBox/InfoBox';
import PostBox from './ProfileBox/PostBox';
import CollectionBox from './ProfileBox/CollectionBox';
import styled from 'styled-components';

function MyProfileCenter({ profileData }) {
  const [toggle, setToggle] = useState(1);
  const handleMenu = index => {
    setToggle(index);
  };

  return (
    <Container>
      <MenuWrap>
        <li
          className={toggle === 1 ? 'menu active' : 'menu'}
          onClick={() => handleMenu(1)}
        >
          작가소개
        </li>
        <li
          className={toggle === 2 ? 'menu active' : 'menu'}
          onClick={() => handleMenu(2)}
        >
          글
        </li>
        <li
          className={toggle === 3 ? 'menu active' : 'menu'}
          onClick={() => handleMenu(3)}
        >
          브런치북
        </li>
      </MenuWrap>
      {toggle === 1 && <InfoBox profileData={profileData} />}
      {toggle === 2 && <PostBox />}
      {toggle === 3 && <CollectionBox />}
    </Container>
  );
}

export default MyProfileCenter;

const Container = styled.div`
  padding-top: 50px;
  font-weight: 100;
`;

const MenuWrap = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-bottom: 15px;

  .menu {
    display: block;
    width: calc(100% / 3);
    padding: 16px 0 17px;
    font-size: 16px;
    font-weight: 100;
    color: #959595;
    cursor: pointer;
    &:hover {
      color: #666;
      font-weight: 300;
      border-top: 1px solid black;
    }
  }
  .active {
    border-top: 1px solid black;
  }
`;
