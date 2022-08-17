import React from 'react'
import NavigationComponent from '../navigation/NavigationComponent'
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  color: white;
  height: var(--navBar-height);

`

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <NavigationComponent />
    </HeaderContainer>
  )
}

export default HeaderComponent