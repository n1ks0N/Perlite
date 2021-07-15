import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const { pages: { about } } = useSelector((store) => store.content)
  return (
    !!about &&
    <div className="section">
      <h2 className="app__title">О нас</h2>
      <p className="about__text">{about.text}</p>
    </div>
  )
}

export default About