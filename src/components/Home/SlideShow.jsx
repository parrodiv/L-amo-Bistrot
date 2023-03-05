import React from 'react'

import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import { heroImgs } from '../../data'




const style= {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center"
}

const Slideshow = () => {
  return (
    <div className='relative w-full'>
      <Fade>
        {heroImgs.map((slideImage, index) => (
          <div key={index} className=''>
            <div
              className='bg-no-repeat min-h-[100vh] w-full'
              style={{
                ...style,
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${slideImage}) center`,
              }}
            ></div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow
