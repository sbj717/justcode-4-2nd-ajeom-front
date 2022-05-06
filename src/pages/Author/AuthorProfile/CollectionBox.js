import React from 'react';
import ProfileBookLayout from '../../Author/Brunchbook/ProfileBookLayout';
import styled from 'styled-components';

function CollectionBox({ toggle, userId }) {
  return (
    <Collection>
      <ProfileBookLayout userId={userId} />
    </Collection>
  );
}

const Collection = styled.section`
  display: block;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: 0;
    }
  }
`;

export default CollectionBox;
