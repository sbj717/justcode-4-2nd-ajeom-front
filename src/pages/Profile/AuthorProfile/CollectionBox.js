import React from 'react';
import styles from './CollectionBox.module.scss';

function CollectionBox({ toggle }) {
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
}

export default CollectionBox;
