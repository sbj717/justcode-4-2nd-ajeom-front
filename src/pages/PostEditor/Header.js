import React, { useState } from 'react';
import styled from 'styled-components';
import { GrMenu } from 'react-icons/gr';
import GuestNav from '../components/Nav/GuestNav';
import MemberNav from '../components/Nav/MemberNav';

function Header(props) {
  const [showNav, setShowNav] = useState('none');
  const openMemberNav = () => {
    setShowNav('memberNav');
  };

  const closeNav = () => {
    setShowNav('none');
  };

  return (
    <Wrapper show={showNav}>
      <LeftWrapper>
        <SidebarBtn>
          <GrMenu size={30} onClick={openMemberNav} />
        </SidebarBtn>
        <Logo>ajeom</Logo>
      </LeftWrapper>
      <GuestNav showNav={showNav} />
      <MemberNav showNav={showNav} />
      {showNav !== 'none' && <OutsideNav onClick={closeNav} />}
      <div>
        <PublishButton onClick={props.openSideBar}>발행</PublishButton>
        <SaveButton>저장</SaveButton>
      </div>
    </Wrapper>
  );
}

const OutsideNav = styled.div`
  position: fixed;
  top: 0;
  left: 260px;
  bottom: 0;
  right: 0;
  background-color: transparent;
  z-index: 1;
`;

const Wrapper = styled.section`
  display: flex;

  padding: 15px 25px 0px 25px;
  justify-content: space-between;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const SidebarBtn = styled.div`
  margin: 10px 15px 0 0;
  cursor: pointer;
`;

const Logo = styled.div`
  font-family: 'Square Peg', cursive;
  font-size: 35px;
`;

const SearchBtn = styled.div`
  margin: 13px 30px 0 0;
  cursor: pointer;
`;
const SaveButton = styled.button`
  font-size: 13px;
  border: 1.3px solid #aaaaaa;
  border-radius: 20px;
  padding: 0.3rem 1.5rem;
  background-color: #ffffff;
  color: #aaaaaa;
  font-weight: 300;
  cursor: pointer;
  float: right;
`;
const PublishButton = styled.button`
  font-size: 13px;
  border: 1.3px solid #00c3bd;
  border-radius: 20px;
  padding: 0.3rem 1.5rem;
  background-color: #ffffff;
  color: #00c3bd;
  font-weight: 300;
  margin-left: 4px;
  cursor: pointer;
  float: right;
`;
export default Header;
