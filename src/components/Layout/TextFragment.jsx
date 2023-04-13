import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

const TextFragment = ({ page, title, title1_2, text, textFood, textDrink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const { t } = useTranslation()

  return (
    <>
      {page === 'food' || page === 'drink' ? (
        <section
          data-aos='fade-up'
          className='min-h-[280px] container flex flex-col items-center justify-center w-full h-full mx-auto relative'
        >
          <div className='text-center'>
            <h2 className='my-3 h3 md:h2'>
              {page === 'food' ? textFood : textDrink}
            </h2>
          </div>
          <div className='absolute text-black bottom-10 right-10'>
            {page === 'food' ? (
              <h3 className='h3'>A.D.</h3>
            ) : (
              page === 'drink' && <h3 className='h3'>W.S.B.</h3>
            )}
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
