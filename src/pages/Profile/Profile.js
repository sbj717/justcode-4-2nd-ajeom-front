import React, { useState, useEffect } from 'react';
import styles from '../Profile/Profile.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import WriterProfile from './WriterProfile';
import Header from '../components/Header/Header';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/user/myProfile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, []);

  const clickModalOutside = e => {
    setIsOpen(!isOpen);
  };

  const [editProfile, setEditProfile] = useState(false);
  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  return (
    <>
      <Header />
      <div className={styles.cover} />
      <section className={styles.container}>
        <section className={styles.top}>
          <div className={styles.ImageBox}>
            {profileData.profile_img_url ? (
              <img src={profileData.profile_img_url} alt="profileImg" />
            ) : (
              <img src="/image/ajeom_logo.png" alt="profileImg" />
            )}
          </div>
          <div className={styles.profileBox}>
            <div className={styles.name}>{profileData.nickname}</div>
            <div className={styles.writeBox}>
              <div className={styles.writeBtn}>글쓰기</div>
              <HiOutlineDotsVertical
                className={styles.edit}
                onClick={clickModalOutside}
              />
              {isOpen && (
                <ul className={styles.editBox}>
                  <li onClick={handleEditProfile}>프로필수정</li>
                </ul>
              )}
            </div>
          </div>
        </section>
        <WriterProfile profileData={profileData} />
      </section>
    </>
  );
}

export default Profile;
