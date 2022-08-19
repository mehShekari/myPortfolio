import { createGlobalStyle, keyframes } from "styled-components";

const hamMenuAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(.5);
  }

  50%{
    transform:translate(0, 0) scale(.9);
  }

  100% {
    transform:translate(0, 0) scale(.5);
  }
`


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --dark-primary: #023047;
    --primary: #219EBC;
    --light-primary: #BECFF9;
    --danger: #FFB703;
    --wihte: #FFFFFF;
    --dark: #333;
    --navBar-height: 8em;
    --sides-padding: 5em;
    --alpha-background: rgba(0, 0, 0 , .5)
  }



  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;


    background-color: ${({ theme }) => theme.screen.screenBackgroundColor};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    display: block;
    background-color: #fff9;
    padding: 0px 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgb(85, 85, 85);
    border-radius: 100vh;
    padding: 10px;
  }

  img {
    width: 100%;
    display: block;
  }

  ul,
  li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button { 
    border: none;
    outline: none;
  }


  .mouse_fallower {
    width: 20px;
    height: 20px;
    transform:translate(0px, 0px) scale(1);
    background-color: yellow;
    position: absolute;
    z-index: 999;
    border-radius: 50%;
    opacity: 0.5;
    transition: transform 100ms;
    animation: ${hamMenuAnimation} 2500ms ease-in-out infinite;

  }
`

export default GlobalStyle;