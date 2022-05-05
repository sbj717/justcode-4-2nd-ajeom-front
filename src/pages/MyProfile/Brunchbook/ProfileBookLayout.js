import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileBookCard from './ProfileBookCard';

function ProfileBookLayout() {
  const [bookList, setBookList] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:8000/user/authorBookList', {
      headers: { 'Content-Type': 'application/json', token: token },
    })
      .then(res => res.json())
      .then(res => {
        setBookList(res);
      });
  }, [token]);

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
