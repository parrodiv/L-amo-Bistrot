import { heroData } from '../../data'
// import components
import Header from '../Navigation/Header'
//import motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn, staggerContainer } from '../../variants'

const Hero = () => {
  // destructure heroData
  const { pretitle, title, subtitle, btnText } = heroData
  return (
    <section className='w-full min-h-screen bg-center bg-cover bg-hero '>
      <Header />
      {/* // * OPACIZZARE LE FOTO CON TOOL FOTO  */}

      {/* // *SLIDE CON IMMAGINI CHE SCORRONO?  */}

      {/* // * ANIMAZIONI CON FRAMER MOTION */}

      <div className='container flex items-center justify-center min-h-screen mx-auto text-white'>
        {/* Text */}
        <div className='flex flex-col items-center text-center'>
          {/* pretitle */}
          <div className=' text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'>
            {pretitle}
          </div>
          {/* title */}
          <h1 className='mb-5 h1'>{title}</h1>
          {/* subtitle */}
          <p className=' max-w-[540px] mb-8'>{subtitle}</p>
          <div>
            <button className='btnCustom'>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
