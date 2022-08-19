import React, { useRef } from 'react'
import myPicture from "../../assets/img/myPic3.jpg"
import styled, { keyframes } from "styled-components";
import html from "../../assets/img/html.png"
import css from "../../assets/img/css.png"
import javscript from "../../assets/img/javascript.png"
import react from "../../assets/img/react.png"

const showSkillsAnimation1 = keyframes`
  from {
    transform: translate(-100px, 30px)
  }

  to {
    transform: translate(-5px, -20px)
  }
`
const showSkillsAnimation2 = keyframes`
  from {
    transform: translate(-100px, 10px)
  }

  to {
    transform: translate(0px, -10px)
  }
`

const showSkillsAnimation3 = keyframes`
  from {
    transform: translate(-100px, -15px)
  }

  to {
    transform: translate(5px, 5px)
  }
`

const showSkillsAnimation4 = keyframes`
  from {
    transform: translate(-100px, -30px)
  }

  to {
    transform: translate(5px, 15px)
  }
`

const AboutMeContainer = styled.div`
text-align: center;
flex-basis: 50vw;
height: 40vw;
display: flex;
align-items: center;

.about_me--img {
  width: 20vw;
  height: 20vw;
  margin-left: 3em;
  z-index: 10;
  
  img {
    object-fit: cover;
    height: 100%;
  }

  border-radius: 50%;
  overflow: hidden;
}

.about_me--skills-img {
  width: 10vw;
  transition: transform 0.5s;

  img{
    width: 55px;
    margin: 2em .9em;
    position: relative;

    &:nth-child(1) {
      transform: translate(-100px, 30px);
      left: -25%;
      animation: ${showSkillsAnimation1} 500ms linear forwards;
      animation-delay: 1s;
    }

    
    &:nth-child(2) {
      transform: translate(-100px, 10px);
      animation: ${showSkillsAnimation2} 500ms linear forwards;
      animation-delay: 1.4s;

    }

    &:nth-child(3) {
      transform: translate(-100px, -15px);
      animation: ${showSkillsAnimation3} 500ms linear forwards;
      animation-delay: 1.8s;
    }

    
    &:nth-child(4) {
      transform: translate(-100px, -30px);
      animation: ${showSkillsAnimation4} 500ms linear forwards;
      left: -25%;
      animation-delay: 2.2s;
    }
  }

}
`

const AboutMe = () => {
  const aboutMeImgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const styles = aboutMeImgRef.current?.style;
    if(styles) {
      
    }
  }

  const handleMouseLeave = () => {
    const styles = aboutMeImgRef.current?.style;
    if(styles) {
    }
  }

  const handleAnimationEnd = () => {
    console.log(aboutMeImgRef);
  }

  return <AboutMeContainer>
    <div className="about_me--img" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={myPicture} alt="" />
    </div>

    <div className="about_me--skills-img" ref={aboutMeImgRef}>
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={javscript} alt="" />
      <img src={react} alt="" onAnimationEnd={handleAnimationEnd}/>
    </div>
  </AboutMeContainer>
}

export default AboutMe