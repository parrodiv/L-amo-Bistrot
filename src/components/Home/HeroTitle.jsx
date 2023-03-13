import React from 'react'
import { Link } from 'react-router-dom'
import { heroData } from '../../data'


const HeroTitle = () => {
  return (
    <div
      id='titolo'
      className='absolute top-0 z-40 flex items-center justify-center w-full min-h-screen mx-auto text-white '
    >
      {/* Text */}
      <div className='flex flex-col items-center text-center animate__animated animate__backInDown'>
        <div>
          <img src={heroData.img} alt="L'amo Bistrot" />
        </div>
        <div>
          <Link to='contact/#reservation'>
            <button className='btnCustom animate__animated animate__heartBeat animate__delay-1s'>
              Prenota un tavolo
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroTitle
