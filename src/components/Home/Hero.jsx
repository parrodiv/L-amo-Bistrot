// import components
import Header from '../Navigation/Header'
//import motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn, staggerContainer } from '../../variants'
import Slideshow from './SlideShow'
import HeroTitle from './HeroTitle'

const Hero = () => {
  return (
    <section className=''>
      <Header />
      <HeroTitle />
      <Slideshow />
    </section>
  )
}

export default Hero
