import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileBookCard from './ProfileBookCard';

function ProfileBookLayout() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch('/data/profile_brunchbook_list_data.json')
      .then(res => res.json())
      .then(res => {
        setBookList(res);
      });
  }, []);

  return (
    <BookListWrapper>
      <BookListContainer>
        {bookList.map(card => (
          <ProfileBookCard key={card.id} card={card} />
        ))}
      </BookListContainer>
    </BookListWrapper>
  );
}

export default ProfileBookLayout;

const BookListWrapper = styled.div`
  width: 700px;
`;

const BookListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 735px;
`;
