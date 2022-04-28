import React from 'react';
import ProfileBookLayout from '../../Profile/Brunchbook/ProfileBookLayout';
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
      <ProfileBookLayout />
    </div>
  );
}

export default CollectionBox;
