import React from 'react';
import styles from './PostBox.module.scss';
import Spinner from '../../List/Spinner';

function PostBox({ toggle, lists, target }) {
  return (
    <div
      className={
        toggle === 2
          ? `${styles.postBox} ${styles.activeContent}`
          : `${styles.postBox}`
      }
    >
      {lists.map(lists => (
        <div className={styles.post} key={lists.id}>
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
      <div className={styles.spinnerWrapper}>
        <Spinner />
      </div>
      <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
    </div>
  );
}

export default PostBox;
