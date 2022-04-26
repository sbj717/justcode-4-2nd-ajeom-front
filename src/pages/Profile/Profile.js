import React, { useState, useEffect } from 'react';
import styles from '../Profile/Profile.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import WriterProfile from './WriterProfile';
import Header from '../components/Header/Header';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch('/data/profile.json')
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, []);
  console.log(profileData);

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
            <img src="" alt="profileImg" />
          </div>
          <div className={styles.profileBox}>
            {profileData[0] !== undefined && (
              <div className={styles.name}>{profileData[0].username}</div>
            )}
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
        <WriterProfile />
      </section>
    </>
  );
}

export default Profile;
