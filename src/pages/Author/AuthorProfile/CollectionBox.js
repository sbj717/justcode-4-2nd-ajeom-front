import React from 'react';
import ProfileBookLayout from '../../Author/Brunchbook/ProfileBookLayout';
import styles from './CollectionBox.module.scss';

function CollectionBox({ toggle, userId }) {
  return (
    <div
      className={
        toggle === 3
          ? `${styles.collection} ${styles.activeContent}`
          : `${styles.collection}`
      }
    >
      <ProfileBookLayout userId={userId} />
    </div>
  );
}

export default CollectionBox;
