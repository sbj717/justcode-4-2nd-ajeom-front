import React from 'react';
import styles from './InfoBox.module.scss';

function InfoBox({ toggle, profileData }) {
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
        {/* <WriterTags tags={tags} /> */}
      </div>
    </div>
  );
}

export default InfoBox;
