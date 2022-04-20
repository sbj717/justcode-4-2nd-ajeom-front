import React, { useState } from 'react';
import styles from '../Profile/Profile.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function Profile() {
  const [edit, setEdit] = useState(false);

  const showEditBox = () => {
    setEdit(!edit);
  };
  return (
    <>
      <div className={styles.top} />
      <section className={styles.section}>
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
              onClick={showEditBox}
            />
            <ul
              className={styles.editBox}
              style={{ display: edit ? 'block' : 'none' }}
            >
              <li>프로필수정</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
