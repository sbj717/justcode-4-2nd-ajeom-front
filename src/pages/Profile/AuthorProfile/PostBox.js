import React from 'react';
import styles from './PostBox.module.scss';
import Spinner from '../../List/Spinner';
import styled, { css } from 'styled-components';

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
              <ImgBox backgroundUrl={lists.thumbnail_url} />
            </div>
          </div>
        ))}

      <div ref={target} style={{ border: '1px solid rgba(0,0,0,0)' }} />
    </div>
  );
}

const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  ${props => {
    if (props.backgroundUrl.length > 0) {
      return css`
        background-image: url(${props.backgroundUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      `;
    }
  }}
`;

export default PostBox;
