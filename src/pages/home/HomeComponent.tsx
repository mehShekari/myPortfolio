import React, { useMemo } from 'react'
import { useIntercetion } from '../../hooks/useIntersection';
import HomeBgContentComponent from './components/HomeBgContentComponent';
import TitleBoxComponent from './components/TitleBoxComponent';
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
      <TitleBoxComponent />
    </HomeContainer>
  )
}

export default HomeComponent