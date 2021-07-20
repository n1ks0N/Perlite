import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const { pages: { about } } = useSelector((store) => store.content)
  return (
    !!about &&
    <div className="section about">
      <h2 className="app__title">О нас</h2>
      <p className="about__text" dangerouslySetInnerHTML={{__html: about.text}} />
    </div>
  )
}

export default About