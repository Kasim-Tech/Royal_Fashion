// import React from 'react'

import Hero from "../Hero/Hero"
import Afterbefore from "../ABcompo/Afterbefore"
import Filter from "../Fillter/Filter"
import Testimonial from "../Testimonials/Testimonial"
import Footers from "../Footer/Footers"
import Slider from "../Slider/CustomSlider"
import "../../App.css"

const Home = () => {
  return (
    <>
    <Hero />
    <Slider/>
    <Afterbefore />
      <Filter />
      <Testimonial />
      <Footers />
    
    </>
  )
}

export default Home
