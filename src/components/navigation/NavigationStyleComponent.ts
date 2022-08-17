import styled, { keyframes } from "styled-components";

const duration = 2500;

const hamMenuAnimation = keyframes`
  0% {
    transform: scale(.5);
  }
`

const brandNameAnimtaion_1 = keyframes`
  100% {
    left: 0;
    top: 0;
  }
`

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  width: 100%;
  height: 100%;
  
  .ham_menu {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 50px;
    cursor: pointer;
    z-index: 999;
    border-radius: 50%;
    margin-top: 20px;
    position: relative;


    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: 800;
      background-color: rgba(999, 999 , 999 , .2);
      transform: scale(.9);
      animation: ${hamMenuAnimation} 1500ms linear infinite alternate;
      opacity: 0;
    }

    &:focus::after {
      opacity: 1;
    }
    
    .row {
      color: yellow;
      display: block;
      width: 65%;
      height: 4px;
      background-color: var(--primary);
      transition: all 350ms;
      border-radius: 5px;
      transform-origin: center center;
      z-index: 999;
    }

    .row-1 {
      width: 55%;
    }

    .row-2 {
      margin: 10px 0px;
    }

    .row-3 {
      width: 45%;
    }

    &:hover>.row-2 {
      margin: 0px 0px;
      background-color: transparent;
    }
  }

  .active {
    .row {
      transition: all 350ms;
    }

    .row-1, 
    .row-3 {
      width: 60%;
    }

    .row-1 {
      transform: rotate(-140deg);
    }

    .row-2 {
      margin: 0px 0px;
      background-color: transparent;
    }

    .row-3 {
      transform:translateY(-8px) rotate(140deg);
    }
  }

  .brand{
    text-align: center;
    padding-left: 2em;
    padding-right: 2em;
    display: inline;
    display: flex;
    align-text: center;
    height: 100%;
    padding-top: 2em;
    height: 100%;

   &--word-color::after {
    color: var(--primary) !important;
   }

    &--word {
      display: inline-block;
      position: relative;
      overflow: hidden;
      color: transparent;
      cursor: pointer;
    }

    &--word::after {
      content: attr(data-word);
      display: inline-block;
      position: absolute;
      left: 0px;
      color: white;
    }

    &--word:nth-child(1)::after {
      left: -100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
    }

    &--word:nth-child(2)::after {
      top: -100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms  ease-in-out 1 forwards;
      animation-delay: 500ms;
    }

    &--word:nth-child(3)::after {
      left: -100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
      animation-delay: 700ms;

    }

    &--word:nth-child(4)::after {
      top: 100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
      animation-delay: 900ms;

    }

    &--word:nth-child(5)::after {
      left: 100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
      animation-delay: 1100ms;

    }

    &--word:nth-child(6)::after {
      top: -100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
      animation-delay: 1300ms;

    }

    &--word:nth-child(7)::after {
      top: 100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms ease-in-out 1 forwards;
      animation-delay: 1500ms;

    }

    &--word:nth-child(8)::after {
      left: 100%;
      animation: ${brandNameAnimtaion_1} ${duration}ms  ease-in-out 1 forwards;  
      animation-delay: 1700ms;
    }
  }
`