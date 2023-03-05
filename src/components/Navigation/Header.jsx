import React, { useState, useEffect } from 'react'
import Social from '../Social'
import Nav from './Nav'
import MenuButton from './MenuButton'



import logo from '../../assets/img/logo/logo.jpeg'

//import motion
import { motion } from 'framer-motion'
// import variants
import { staggerContainer, fadeIn } from '../../variants'
import { Link } from 'react-router-dom'


// header variants
const headerVariants = {
  hidden: {
    padding: '35px 0 35px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    transition: {
      type: 'spring',
    },
  },
}

export const navVariants = {
  hidden: {
    clipPath: 'circle(1.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 50,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 70,
    },
  },
}

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false)
  //nav state
  const [nav, setNav] = useState(false)

  //event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <motion.header
      variants={headerVariants}
      intial='hidden'
      animate={isActive ? 'show' : 'hidden'}
      className='fixed top-0 z-50 w-full max-w-full py-3 bg-rosa-antico/80'
    >
      <div className='container mx-auto'>
        {/* menu button */}
        <div className='relative flex items-center justify-between px-4 text-white'>
          <div>
            <MenuButton nav={nav} setNav={setNav} />
          </div>
          {/* logo */}
          <div>
            <Link to='/'>
              <img
                className={
                  isActive
                    ? 'w-[60px] h-[60px] rounded-full lg:w-[80px] lg:h-[80px]'
                    : 'w-[70px] h-[70px] rounded-full lg:w-[105px] lg:h-[105px]'
                }
                src={logo}
                alt='logo'
              />
            </Link>
          </div>
          {/* social */}
          <div>
            <Social />
          </div>
          <motion.div
            variants={navVariants}
            initial='hidden'
            animate={nav ? 'show' : ''}
            className='absolute bg-blu-logo w-[310px] h-[50vh] left-0 top-[120px] z-50 rounded-lg shadow-xl'
          >
            <Nav nav={nav} setNav={setNav} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
