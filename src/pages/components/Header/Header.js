import React, { useState } from 'react';
import styled from 'styled-components';
import { GrMenu } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import GuestNav from '../Nav/GuestNav';
import MemberNav from '../Nav/MemberNav';

function Header({ detailPosition, detailTop }) {
  const [showNav, setShowNav] = useState('none');

  const openGuestNav = () => {
    setShowNav('guestNav');
  };

  const openMemberNav = () => {
    setShowNav('memberNav');
  };

  const closeNav = () => {
    setShowNav('none');
  };

  return (
    <Wrapper
      show={showNav}
      style={{ position: detailPosition, top: detailTop }}
    >
      <LeftWrapper>
        <SidebarBtn>
          <GrMenu size={30} onClick={openGuestNav} />
        </SidebarBtn>
        <Logo>ajeom</Logo>
      </LeftWrapper>
      <GuestNav showNav={showNav} />
      <MemberNav showNav={showNav} />
      <SearchBtn>
        <GoSearch size={21} />
      </SearchBtn>
      {showNav !== 'none' && <OutsideNav onClick={closeNav} />}
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
  z-index: -1;
`;

const Wrapper = styled.section`
  display: flex;
  padding: 15px 25px 0px 25px;
  justify-content: space-between;
  width: 100vw;
  z-index: 10;
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

export default Header;
