import React, { useState, useRef, useEffect } from 'react';
import styles from '../Profile/Profile.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import WriterProfile from './WriterProfile';

function Profile() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isWriter, setIsWriter] = useState(true);

  const clickModalOutside = e => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.cover} />
      <section className={styles.container}>
        <section className={styles.top}>
          <div className={styles.ImageBox}>
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfODEg/MDAxNTYzMTEyNjcxMDM0.oXkLnZhEcHekYHqOVHM82fDYdhwb0dbvWVgb_UE-Amog.gG3QWmFe7k56OXaCHf5Jtnv0VSqJ_q_ljpseR5nzojkg.JPEG.studygir/tejuTyY_(25).jpg?type=w800"
              alt=""
            />
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
                  <li>프로필수정</li>
                </ul>
              )}
            </div>
          </div>
          <WriterProfile />
        </section>
      </section>
    </>
  );
}

export default Profile;
