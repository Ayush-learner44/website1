import React from 'react'
import Common from '../Components/Common'
import web from '../Images/two.jpg'

const About = () => {
  return (
    <>
    <Common
      text="This is the About Page" 
      text2="Happy to see you here"
      func="Welcome"
      dest="/contact"
      image={web}
    />
    </>
  )
}

export default About