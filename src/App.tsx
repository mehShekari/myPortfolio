import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyles';
import { useThrottle } from './hooks/useThrottle';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);

  const moveMouse = useThrottle<React.MouseEvent>((e) => {
    const styles = mouseFollowerRef.current?.style;
    if(styles) {
      styles.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`
    };
  }, 10)

  const HandlemouseMove = (e: React.MouseEvent) => {
    // moveMouse(e);
  }

  const darkMode = false;
  const theme = {
    screen: {
      screenBackgroundColor: darkMode ? '#121212' : '#fff9',
      screenColor: darkMode ? '#fff' : '#333',
    },

    button: {
      buttonBackgroundColor: '#',
      buttonColor: '#'
    }
  }


  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App" onMouseMove={HandlemouseMove}>
      {/* <div className="mouse_fallower" ref={mouseFollowerRef} /> */}
      <RoutesComponent />
    </div>
  </ThemeProvider>;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    screen: {
      screenBackgroundColor: string;
      screenColor: string;
    }
    button: {
      buttonBackgroundColor: string;
      buttonColor: string;
    }
  }
}

export default App;
