import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrMenu } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import GuestNav from '../Nav/GuestNav';
import MemberNav from '../Nav/MemberNav';

function Header() {
  const [showNav, setShowNav] = useState('none');
  const [navScrollY, setNavScrollY] = useState(0);
  const [navStyle, setNavStyle] = useState(false);
  const navigate = useNavigate();

  const openGuestNav = () => {
    setShowNav('guestNav');
  };

  const openMemberNav = () => {
    setShowNav('memberNav');
  };

  const closeNav = () => {
    setShowNav('none');
  };

  //scrollY에 따라 header의 style 변경
  useEffect(() => {
    const changeNavStyle = () => {
      if (navScrollY > 530) {
        setNavScrollY(window.scrollY);
        setNavStyle(true);
      } else {
        setNavScrollY(window.scrollY);
        setNavStyle(false);
      }
    };

    window.addEventListener('scroll', changeNavStyle);

    return () => {
      window.removeEventListener('scroll', changeNavStyle);
    };
  });

  return (
    <Wrapper show={showNav} navStyle={navStyle}>
      <LeftWrapper>
        <SidebarBtn>
          <GrMenu size={30} onClick={openGuestNav} />
        </SidebarBtn>
        <Logo
          onClick={() => {
            navigate('/');
          }}
        >
          ajeom
        </Logo>
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
  z-index: 50;
`;

const Wrapper = styled.section`
  width: 100%;
  position: ${props => (props.navStyle ? 'fixed' : 'absolute')};
  display: flex;
  justify-content: space-between;
  padding: 7px 25px 14px 25px;
  background-color: ${props => (props.navStyle ? 'white' : 'transparent')};
  border-bottom: ${props => (props.navStyle ? '1px solid #d1d1d1' : 'none')};
  opacity: ${props => (props.navStyle ? 0.9 : 1)};
  transition: all ease 0.5s;
  z-index: 100;
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
  cursor: pointer;
`;

const SearchBtn = styled.div`
  margin-top: 13px;
  cursor: pointer;
`;

export default Header;
