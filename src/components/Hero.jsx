import { heroData } from '../data'
// import components
import Header from './Header'
//import motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn, staggerContainer } from '../variants'

const Hero = () => {
  // destructure heroData
  const { pretitle, title, subtitle, btnText } = heroData
  return (
    <section className='min-h-screen w-full bg-hero bg-center bg-cover opacity-60 '>
      <Header />

      // * SLIDE CON IMMAGINI CHE SCORRONO? 

      // * ANIMAZIONI CON FRAMER MOTION

      <div className='container mx-auto bg-pink-200/20 min-h-screen flex justify-center items-center'>
        {/* Text */}
        <div className='text-center flex flex-col items-center'>
          {/* pretitle */}
          <div className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'>
            {pretitle}
          </div>
          {/* title */}
          <h1 className='h1 mb-5'>{title}</h1>
          {/* subtitle */}
          <p className='text-white max-w-[540px] mb-8'>{subtitle}</p>
          <div>
            <button className='btnCustom'>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
