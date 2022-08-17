import React from 'react'
import styled from 'styled-components';

type NavMenuProps = {
  isActive: Boolean
}
const NavMenuComponent = styled.div<NavMenuProps>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 300ms ease-in-out;

  ${({ isActive }) => isActive ? `
    opacity: 1;
    visibilty: visible;
    transform: scale(1);
  `
    : `
    transform: scale(0.1);
    opacity: 0;
    visibilty: hidden;
  `}}}
`;

const NavMenu = ({ isActive }: NavMenuProps) => {

  return (
    <NavMenuComponent isActive={isActive}>

    </NavMenuComponent>
  )
}

export default React.memo(NavMenu)