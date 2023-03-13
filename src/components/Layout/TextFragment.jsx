import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TextFragment = ({
  page,
  title,
  title1_2,
  text,
  titleFood,
  titleDrink,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <>
      {page === 'food' ? (
        <section
          data-aos='fade-up'
          className='min-h-[280px] container flex flex-col items-center justify-center w-full h-full mx-auto'
        >
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>{titleFood}</h2>
          </div>
        </section>
      ) : page === 'drink' ? (
        <section
          data-aos='fade-up'
          className='min-h-[280px] container flex flex-col items-center justify-center w-full h-full mx-auto'
        >
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>{titleDrink}</h2>
          </div>
        </section>
      ) : (
        <section
          data-aos='fade-up'
          className='min-h-[480px] container flex flex-col items-center justify-center w-full h-full mx-auto'
        >
          <div className='text-center' data-aos='fade-in-up'>
            <h2 className='my-3 h3 md:h2'>{title}</h2>
            {title1_2 && <h2 className='my-3 h3 md:h2'>{title1_2}</h2>}
            <p className='leading-8 font-secondary'>{text}</p>
          </div>
        </section>
      )}
    </>
  )
}

export default TextFragment
