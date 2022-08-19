import darken from "darken";
import styled, { keyframes } from "styled-components";

const hamMenuAnimation = keyframes`
  0% {
    transform: scale(.7);
  }
`

export const Button = styled.button`
  --border-radius:  0.8em;

  background-color: brand-color(var(--danger));
  border: none;
  background-color: var(--danger);
  outline: none;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: var(--border-radius);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: rgba(0, 0 , 0 , .2);
    transform: scale(0.9);
    animation: ${hamMenuAnimation} 800ms linear infinite alternate;
    opacity: 0;
   
    }
   
    &:focus::after {
      opacity: 1;
    }

`