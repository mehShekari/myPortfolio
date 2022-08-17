import React from 'react';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../header/HeaderComponent';
import styled from "styled-components";

type layoutComponentProps = {
  children: React.ReactElement
}

const StyledMain = styled.main`
  // padding-top: var(--navBar-height);
`

const LayoutComponent = ({ children }: layoutComponentProps) => {
  return <>
    <HeaderComponent />
    <StyledMain>{children}</StyledMain>
    <FooterComponent />
  </>;
}

export default LayoutComponent