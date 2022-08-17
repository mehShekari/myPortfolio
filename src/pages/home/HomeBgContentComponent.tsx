import React, { useEffect, useRef } from 'react'
import { PaddingTopFix } from '../../assets/PaddingTopFix';
import styled from "styled-components";
import TextTyper from "../../lib/textTyper/TextTyper";
import myPicture from "../../assets/img/myPic.jpg"

const HomeBgContent = styled.div`
  padding: 2.1em;
  display:  flex;
  flex-direction: column;
  align-items: center;
  .about-me {
    text-align: center;
  }

  .about_me {
    &--img {
      width: 15vw;
      height: 15vw;

      img {
        object-fit: cover;
        height: 100%;
      }

      border-radius: 50%;
      overflow: hidden;
    }
  }
  .about_me--text {
    margin-top: 2.2em;
  }
`

const HomeBgContentComponent = () => {
  const textTyperRef = useRef<any>(null)
  const equal = "..."
  useEffect(() => {
    const txtTyper = new TextTyper(textTyperRef.current, {
      loop: true,
      deleteSpeed: 100,
      typeSpeed: 100
    });


    txtTyper.pauseFor(1000)
      .typeText("Hello my friend welcome to my site!")
      .pauseFor(3000)
      .deleteAllText(50)

      .typeText("my name is mehran and i am a front-end developer")
      .pauseFor(2000)
      .deleteAllText(50)

      .typeText("junior developer but its not important 😅")
      .pauseFor(2000)
      .deleteAllText(50)

      .typeText("im working on react")
      .pauseFor(1000)
      .deleteChar(5)

      .typeText("javascript")
      .pauseFor(1000)
      .deleteChar(10)

      .typeText("typescript")
      .pauseFor(1000)
      .deleteChar(11)

      .deleteAllText(150)
      .typeText("for more information scroll down !")
      .pauseFor(3000)
      .deleteAllText(150)

      .start()

  }, [equal])

  return (
    <PaddingTopFix>
      <HomeBgContent>
        <div className="about_me">
          <div className="about_me--img">
            <img src={myPicture} alt="" />
          </div>
        </div>
        <h2 className="about_me--text" ref={textTyperRef}></h2>
      </HomeBgContent>
    </PaddingTopFix>
  )
}

export default HomeBgContentComponent