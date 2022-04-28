import React, { useState, useEffect } from 'react';
import styles from '../Profile/Profile.module.scss';
import WriterProfile from './WriterProfile';
import Header from '../components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';

function Author() {
  const params = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/user/authorProfile/${params.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, [params.id]);

  return (
    <>
      <Header />
      <div className={styles.cover} />
      <section className={styles.container}>
        <section className={styles.top}>
          <div className={styles.profileBox}>
            <div className={styles.name}>{profileData.nickname}</div>
          </div>
          <div className={styles.ImageBox}>
            <img src={profileData.profile_img_url} alt="profileImg" />
          </div>
        </section>
        <div className={styles.writeBox}>
          <div
            className={styles.writeBtn}
            onClick={() => {
              navigate('/write');
            }}
          >
            글쓰기
          </div>
        </div>
        {profileData.is_author ? (
          <WriterProfile profileData={profileData} params={params} />
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Author;
