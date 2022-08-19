import React from 'react'
import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translate(-50%, 10px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 25px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 40px) scale(0.7);
    opacity: 0;
  }

`

const ScrollDownAnimation = styled.div`
  display: inline-block;
  transform: translateY(-50%);
  wdith: 70px;

  .mouse {
    margin: 0 auto;
    display: block;
    border-radius: 50px;
    border: 2px solid var(--light-primary);
    height: 50px;
    width: 35px;
    position: relative;
  }
  
  .move {
    position: absolute;
    background-color: var(--light-primary);
    height: 7px;
    width: 7px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: ${move} 2500ms linear infinite;
  }
`

const ScrollDown = () => {
  return <ScrollDownAnimation>
  <span className="mouse">
    <span className="move"></span>
  </span>
</ScrollDownAnimation>
}

export default ScrollDown