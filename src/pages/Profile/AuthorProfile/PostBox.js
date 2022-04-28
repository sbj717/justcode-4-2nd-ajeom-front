import React from 'react';
import styles from './PostBox.module.scss';
import Spinner from '../../List/Spinner';

function PostBox({ toggle, lists, target, setSpinner, spinner }) {
  console.log(lists);
  return (
    <div
      className={
        toggle === 2
          ? `${styles.postBox} ${styles.activeContent}`
          : `${styles.postBox}`
      }
    >
      {lists === null ||
        lists.map(lists => (
          <div className={styles.post} key={lists.id}>
            <div className={styles.container}>
              <div className={styles.textBox}>
                <span className={styles.title}>{lists.title}</span>
                <p>{lists.summary}</p>
              </div>
              <div className={styles.imgBox}>
                <img src={lists.thumbnail_url} alt="postImg" />
              </div>
            </div>
          </div>
        ))}

      <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
    </div>
  );
}

export default PostBox;
