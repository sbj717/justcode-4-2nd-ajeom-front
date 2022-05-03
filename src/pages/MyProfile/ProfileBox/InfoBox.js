import React from 'react';
import styles from './InfoBox.module.scss';

function InfoBox({ toggle, profileData, target }) {
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
        <span>{profileData.description}</span>
        <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
      </div>
    </div>
  );
}

export default InfoBox;
