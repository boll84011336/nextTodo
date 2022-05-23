import React from "react";
import styled from "styled-components";
import burger from '../img/burger.png';
import arrow from '../img/arrow.png';

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding:0px 32px;
  box-sizing: border-box;
  background: #8DC8FF;
`;

const Brand = styled.div`
  font-size:32px;
  font-weight: bold;
  color:white;
  margin-left: 24px;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;

export default function Header() {
  return (
    <><HeaderContainer> 
      <LeftContainer>     
        <img src={burger.src} alt="Background"/> 
        <Brand>HandsUP</Brand>      
      </LeftContainer>   
        <NavbarList>
        <img src={arrow.src} alt="arrow"/>
        </NavbarList>
    </HeaderContainer></>
  );
}

