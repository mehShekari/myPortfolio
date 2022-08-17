import React, { useRef, useState } from 'react'
import { NavigationContainer } from './NavigationStyleComponent'
import NavMenu from './NavMenu';


const NavigationComponent = () => {
  const hamMenuRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<Boolean>(false);

  const handleAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    setState(prev => !prev)
  }  
  return <NavigationContainer>

    <h2 className="brand">
      <span className="brand--word" data-word="M">M</span>
      <span className="brand--word" data-word="e">e</span>
      <span className="brand--word" data-word="h">h</span>
      <span className="brand--word" data-word="r">r</span>
      <span className="brand--word" data-word="a">a</span>
      <span className="brand--word" data-word="n">n</span>
      <span className="brand--word brand--word-color" data-word="S">S</span>
      <span className="brand--word brand--word-color" data-word="H">H</span>

    </h2>

    <button
      className={`ham_menu ${state ? "active" : ""}`}
      onClick={handleAnimation}
      ref={hamMenuRef}
    >
      <span className="row row-1"></span>
      <span className="row row-2"></span>
      <span className="row row-3"></span>
    </button>

    <NavMenu isActive={state} />

  </NavigationContainer>
}

export default NavigationComponent