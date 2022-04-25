import React from 'react';
import styled, { keyframes } from 'styled-components';

function Spinner() {
  return <Spin />;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`
  animation: ${rotate360} 1s linear infinite; //효과가 처음부터 끝까지 일정한 속도로(linear)진행, 에니메이션 효과가 무한히 반복(infinite)
  transform: translateZ(0); //애니메이션 전환 속도를 높이는 데 사용

  border-top: 2px solid #00c3bd;
  border-right: 2px solid #00c3bd;
  border-bottom: 2px solid #00c3bd;
  border-left: 3.5px solid #00c3bd;

  background: transparent;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
`;

export default Spinner;
