import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import InfoBox from './AuthorProfile/InfoBox';
import PostBox from './AuthorProfile/PostBox';
import CollectionBox from './AuthorProfile/CollectionBox';

function AuthorProfileCenter({ profileData, userId }) {
  const target = useRef(null);
  const [count, setCount] = useState(2);
  const [spinner, setSpinner] = useState(true);

  const [toggle, setToggle] = useState(1);
  const [lists, setLists] = useState([]);

  const handleMenu = index => {
    setToggle(index);
  };

  useEffect(() => {
    handleMenu(1);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/list/profile/${userId}?page=1&pageSize=6`, {
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
        `http://localhost:8000/list/profile/${userId}?page=${count}&pageSize=6`
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
      {toggle === 2 && (
        <PostBox
          lists={lists}
          target={target}
          setSpinner={setSpinner}
          spinner={spinner}
          userId={userId}
        />
      )}
      {toggle === 3 && <CollectionBox userId={userId} />}
    </Container>
  );
}

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

export default AuthorProfileCenter;
