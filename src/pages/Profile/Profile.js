import React, { useState, useEffect } from 'react';
import styles from '../Profile/Profile.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import WriterProfile from './WriterProfile';
const { Kakao } = window;
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user_id, setUserId] = useState();
  const [nickname, setNickname] = useState();
  const [profileImage, setProfileImage] = useState();
  const [isWriter, setIsWriter] = useState(true);

  const clickModalOutside = e => {
    setIsOpen(!isOpen);
  };

  const [editProfile, setEditProfile] = useState(false);
  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  return (
    <>
      <div className={styles.cover} />
      <section className={styles.container}>
        <section className={styles.top}>
          <div className={styles.ImageBox}>
            <img src="" alt="profileImg" />
          </div>
          <div className={styles.profileBox}>
            <div className={styles.name}>김밍밍</div>
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
          <WriterProfile onClick={handleEditProfile} />
        </section>
      </section>
    </>
  );
}

export default Profile;
