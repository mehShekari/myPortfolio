import React, { useMemo } from 'react'
import { useIntercetion } from '../../../hooks/useIntersection';
import styled from "styled-components";

const StyledTitleBox = styled.div`
  margin-top: 5em;
  display: flex;
  justify-content: space-around;
  .box {
    width: 10%;
    background-color: var(--dark);
    color: var(--wihte);
    padding: 2em;
    border-radius: 0.5em;
  }
`


const TitleBoxComponent = () => {
  const arrayRef = useMemo<any>(() => [], []);
  const items = useMemo(() => {
    return [
      { title: "shit", para: "this is a fake text that i use to make some shitiy text :/" },
      { title: "ass", para: "this is a fake text that i use to make some shitiy text :/ text that i use to make" },
      { title: "pee", para: "this is a fake text that i use to  :/" },
    ]
  }, [])

  useIntercetion<Array<HTMLDivElement>>((entry) => {
    entry.target.style.backgroundColor = "royalblue"
  }, arrayRef, {
    root: null,
    rootMargin: `-200px`,
    treshold: 1.0
  })

  return <StyledTitleBox>
    {items.map((item, index) => (
      <div className="box" key={index} ref={el => arrayRef[index] = el}>
        <h2 className="title">{item.title}</h2>
        <p className="para">{item.para}</p>
      </div>
    ))}
  </StyledTitleBox>
}

export default TitleBoxComponent