import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import styles from '../Profile/WriterProfile.module.scss';
import WriterTags from './WriterTags';
function WriterProfile() {
  const [list, setLists] = useState({
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
  const [toggle, setToggle] = useState(1);

  const handleMenu = index => {
    setToggle(index);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/profile.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setTags(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/data/listCard.json', {
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
        <div className={styles.article}>
          <div className={styles.container}>
            <div className={styles.textBox}>
              <span className={styles.title}>코시국 남미 콜롬비아 출장기</span>
              <p>
                신경 쓸게 너무 많아 - 일상의 소중함을 더 없이 느꼈던 30시간
                'Hola, como estas?' 올라올라, 반가운 스페인어 인사로 눈을 뜬 지
                하루가 지났다. 오늘 아침 정신 차리고 보니, 정말 나 신경 쓸게
                너무 많아 -
              </p>
            </div>
            <div className={styles.imgBox}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfODEg/MDAxNTYzMTEyNjcxMDM0.oXkLnZhEcHekYHqOVHM82fDYdhwb0dbvWVgb_UE-Amog.gG3QWmFe7k56OXaCHf5Jtnv0VSqJ_q_ljpseR5nzojkg.JPEG.studygir/tejuTyY_(25).jpg?type=w800"
                alt="#"
              />
            </div>
          </div>
        </div>
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
          북 브런치
        </li>
      </ul>

      <InfoBox />
      <ArticleBox />
      <CollectionBox />
    </section>
  );
}

export default WriterProfile;
