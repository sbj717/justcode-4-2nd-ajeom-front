import React, { useEffect, useState } from 'react';
import styles from '../Profile/WriterProfile.module.scss';
import WriterTags from './WriterTags';
function WriterProfile() {
  const [toggle, setToggle] = useState(1);
  const [writer, setWriter] = useState(false);

  const [lists, setLists] = useState({
    posts: [
      {
        id: '',
        postTitle: '',
        postText: '',
        writer: '',
        postImg: '',
      },
    ],
  });

  const [tags, setTags] = useState({
    writerTags: [
      {
        id: '',
        keyword: '',
      },
    ],
  });

  const handleMenu = index => {
    setToggle(index);
  };

  const handleAnimation = () => {
    setTimeout(() => {}, 1000);
  };

  useEffect(() => {
    handleMenu(1);
  }, []);

  useEffect(() => {
    fetch('data/profileTags.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setTags(data);
      });
  }, []);
  useEffect(() => {
    fetch('/data/listCard.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setLists(data);
      });
  }, []);

  const InfoBox = () => {
    return (
      <div
        className={
          toggle === 1
            ? `${styles.InfoBox} ${styles.activeContent}`
            : `${styles.InfoBox}`
        }
      >
        <div className={styles.container}>
          <p>소개</p>
          <span>
            뚝딱거리면서 개발노트를 쓰고 있습니다. 과연 개발자 될 수...있을까?
            ㅜㅜ
          </span>
          <WriterTags tags={tags} />
        </div>
      </div>
    );
  };

  const ArticleBox = () => {
    return (
      <div
        className={
          toggle === 2
            ? `${styles.articleBox} ${styles.activeContent}`
            : `${styles.articleBox}`
        }
      >
        {lists.posts.map(lists => (
          <div className={styles.article} key={lists.id}>
            <div className={styles.container}>
              <div className={styles.textBox}>
                <span className={styles.title}>{lists.postTitle}</span>
                <p>{lists.postText}</p>
              </div>
              <div className={styles.imgBox}>
                <img src={lists.postImg} alt="postImg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CollectionBox = () => {
    return (
      <div
        className={
          toggle === 3
            ? `${styles.collection} ${styles.activeContent}`
            : `${styles.collection}`
        }
      >
        <div className={styles.container}>
          <div className={styles.bookContainer}>
            <div className={styles.book}>
              <span className={styles.bookLine} />
              <div className={styles.titleBox}>보통의 서비스기획 PO 이야기</div>
              <div className={styles.imgBox}>
                <img
                  src="https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                  alt="collection"
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.brunch}>brunch book</div>
              <span>보통의 서비스기획 PO 이야기</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    !writer && (
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
        <InfoBox />
        <ArticleBox />
        <CollectionBox />
      </section>
    )
  );
}

export default WriterProfile;
