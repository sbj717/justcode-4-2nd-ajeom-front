import React from 'react';
import styles from './WriterTags.module.scss';
function WriterTags({ tags }) {
  // const TagBox = styled.ul`
  //   display: flex;
  //   gap: 15px;
  //   li {
  // padding: 4px 10px;
  // border: 1px solid #ddd;
  // font-size: 12px;
  // border-radius: 20px;
  // color: #959595;
  // cursor: pointer;
  //   }
  // `;
  return (
    <ul className={styles.writeTags}>
      {tags.writerTags.map(tag => (
        <li key={tag.id}>{tag.keyword}</li>
      ))}
    </ul>
  );
}

export default WriterTags;
