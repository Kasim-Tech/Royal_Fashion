import Navbaar from './Components/Hadder/Navbaar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Components/Hero/Hero'

import CustomSlider from './Components/Slider/CustomSlider'
import Afterbefore from './Components/ABcompo/afterbefore'
import Filter from './Components/Fillter/Filter'
import Testimonial from './Components/Testimonials/Testimonial'
import Footers from './Components/Footer/Footers'


function App() {


  return (
    <>
      <Navbaar />
      <Hero />
      <CustomSlider />
      <Afterbefore />
      <Filter />
      <Testimonial />
      <Footers />


    </>
  )
}

export default App
