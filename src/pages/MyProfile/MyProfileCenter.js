import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import InfoBox from './ProfileBox/InfoBox';
import PostBox from './ProfileBox/PostBox';
import CollectionBox from './ProfileBox/CollectionBox';

function MyProfileCenter({ profileData }) {
  const target = useRef(null);
  const [count, setCount] = useState(2);
  const [spinner, setSpinner] = useState(true);
  const [toggle, setToggle] = useState(1);
  const [lists, setLists] = useState([]);
  const token = localStorage.getItem('token');

  const handleMenu = index => {
    setToggle(index);
  };

  useEffect(() => {
    handleMenu(1);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/list/myprofile?page=1&pageSize=6`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setLists(data);
      });
  }, [token]);

  const fetchData = async () => {
    setTimeout(async () => {
      await fetch(
        //배포하기 전 server 주소로 바꿔줘야함!
        `http://localhost:8000/list/myprofile?page=${count}&pageSize=6`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', token: token },
        }
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
      <Menu>
        <MenuTab
          className={toggle === 1 ? MenuTab.active : ''}
          onClick={() => handleMenu(1)}
        >
          작가소개
        </MenuTab>
        <MenuTab
          className={toggle === 2 ? MenuTab.active : ''}
          onClick={() => handleMenu(2)}
        >
          글
        </MenuTab>
        <MenuTab
          className={toggle === 3 ? MenuTab.active : ''}
          onClick={() => handleMenu(3)}
        >
          브런치북
        </MenuTab>
      </Menu>

      <InfoBox
        toggle={toggle}
        handleMenu={handleMenu}
        profileData={profileData}
      />

      <PostBox
        handleMenu={handleMenu}
        toggle={toggle}
        setLists={setLists}
        lists={lists}
        target={target}
        setSpinner={setSpinner}
        spinner={spinner}
      />
      <CollectionBox toggle={toggle} handleMenu={handleMenu} />
    </Container>
  );
}

export default MyProfileCenter;

const Container = styled.section`
  padding-top: 50px;
  font-weight: 100;
`;

const Menu = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-bottom: 15px;
  .menuTab {
  }
`;

const MenuTab = styled.li`
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
  &.active {
    border-top: 1px solid black;
  }
`;

const Active = styled.div``;
