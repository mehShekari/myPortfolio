import React, { useEffect, useRef } from 'react'
import { PaddingTopFix } from '../../../assets/PaddingTopFix';
import styled from "styled-components";
import TextTyper from "../../../lib/textTyper/TextTyper";
import AboutMeText from './AboutMeText';
import AboutMe from './AboutMe';
import ScrollDown from './../ScrollDown';

const HomeBgContent = styled.div`
  padding: 0 var(--sides-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .flex-row-template{
    display:  flex;
    align-items: center;
    align-items: center;
    width: 100%;
  }
`

const HomeBgContentComponent = () => {
  // const textTyperRef = useRef<any>(null)
  // const equal = "..."
  // useEffect(() => {
  //   const txtTyper = new TextTyper(textTyperRef.current, {
  //     loop: true,
  //     deleteSpeed: 100,
  //     typeSpeed: 100
  //   });


  //   txtTyper.pauseFor(1000)
  //     .typeText("Hello my friend welcome to my site!")
  //     .pauseFor(3000)
  //     .deleteAllText(50)

  //     .typeText("my name is mehran and i am a front-end developer")
  //     .pauseFor(2000)
  //     .deleteAllText(50)

  //     .typeText("junior developer but its not important 😅")
  //     .pauseFor(2000)
  //     .deleteAllText(50)

  //     .typeText("im working on react")
  //     .pauseFor(1000)
  //     .deleteChar(5)

  //     .typeText("javascript")
  //     .pauseFor(1000)
  //     .deleteChar(10)

  //     .typeText("typescript")
  //     .pauseFor(1000)
  //     .deleteChar(11)

  //     .deleteAllText(150)
  //     .typeText("for more information scroll down !")
  //     .pauseFor(3000)
  //     .deleteAllText(150)

  //   if (equal) {
  //     txtTyper.start()
  //   }

  // }, [equal])

  return (
    <PaddingTopFix>
      <HomeBgContent>
        <div className="flex-row-template">
          <AboutMeText />
          <AboutMe />
        </div>
        <ScrollDown />
      </HomeBgContent>
    </PaddingTopFix>
  )
}

export default HomeBgContentComponent