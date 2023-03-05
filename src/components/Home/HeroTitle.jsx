import React from 'react'
import { heroData } from '../../data'

const HeroTitle = () => {
  const { pretitle, title, subtitle, btnText } = heroData
  return (
    <div
      id='titolo'
      className='absolute top-0 z-40 flex items-center justify-center w-full min-h-screen mx-auto text-white'
    >
      {/* Text */}
      <div className='flex flex-col items-center text-center'>
        {/* pretitle */}
        <div className=' text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'>
          {pretitle}
        </div>
        {/* title */}
        <h1 className='mb-5 h1'>{title}</h1>
        {/* subtitle */}
        <p className=' max-w-[540px] mb-8 font-three text-3xl'>{subtitle}</p>
        <div>
          <button className='btnCustom'>{btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default HeroTitle
