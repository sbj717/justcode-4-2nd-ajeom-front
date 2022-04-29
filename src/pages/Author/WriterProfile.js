import React, { useEffect, useState, useRef } from 'react';
import styles from '../Profile/WriterProfile.module.scss';
import InfoBox from './AuthorProfile/InfoBox';
import PostBox from './AuthorProfile/PostBox';
import CollectionBox from './AuthorProfile/CollectionBox';
import { useParams } from 'react-router-dom';

function WriterProfile({ profileData }) {
  const target = useRef(null);
  const [count, setCount] = useState(2);
  const [writerList, setWriterList] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const [toggle, setToggle] = useState(1);
  const [lists, setLists] = useState([]);
  const params = useParams();
  const userId = params.id;

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
  }, [params.id]);

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
    <section className={styles.writerContainer}>
      <ul className={styles.menu}>
        <li
          className={
            toggle === 1
              ? `${styles.menuTab} ${styles.active}`
              : `${styles.menuTab}`
          }
          onClick={() => handleMenu(1)}
        >
          작가소개
        </li>
        <li
          className={
            toggle === 2
              ? `${styles.menuTab} ${styles.active}`
              : `${styles.menuTab}`
          }
          onClick={() => handleMenu(2)}
        >
          글
        </li>
        <li
          className={
            toggle === 3
              ? `${styles.menuTab} ${styles.active}`
              : `${styles.menuTab}`
          }
          onClick={() => handleMenu(3)}
        >
          브런치북
        </li>
      </ul>

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
        userId={userId}
      />
      <CollectionBox toggle={toggle} handleMenu={handleMenu} userId={userId} />
    </section>
  );
}

export default WriterProfile;
