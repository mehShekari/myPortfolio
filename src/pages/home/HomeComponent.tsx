import React from 'react'
import HomeBgContentComponent from './HomeBgContentComponent';
import { HomeContainer } from './HomeStyledComponent';

const HomeComponent = () => {
  return (
    <HomeContainer>
      <div className="home_bg_holder">
        <div className="home_img--blur"></div>
        <div className="home_img--content">
          <HomeBgContentComponent />
        </div>
      </div>
    </HomeContainer>
  )
}

export default HomeComponent