import React from 'react'
import { Button } from '../../../utilities/elements/Button'
import styled from 'styled-components'

const AboutMeTextContainer = styled.div`
  flex-basis: 50vw;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 50px;
  }

  .primary_color {
    color: var(--primary)
  }

  .custom_button{
    width: 25%;
    color: var(--dark);
    font-weight: bold;
    font-size: 1em;
    margin-top: 20px;
  }
`

const AboutMeText = () => {
  return <AboutMeTextContainer>
    <h2>Hello There!</h2>
    <h2>I'm Mehran <span className="primary_color">Shekari</span>,</h2>
    <h2>Front-end Developer</h2>
    <Button className="custom_button">About me</Button>
  </AboutMeTextContainer>
}

export default AboutMeText