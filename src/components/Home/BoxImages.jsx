import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { boxImagesHomeData } from '../../data'
 import { useTranslation } from 'react-i18next'

const BoxImages = () => {
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])
  const { t } = useTranslation()
  return (
    <div className='grid w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-3'>
      {boxImagesHomeData.map((dataBox, index) => {
        return dataBox.hasOwnProperty('img') ? (
          <div data-aos='flip-down' key={index} classname='w-full rounded'>
            <img
              src={dataBox.img}
              className='object-cover lg:max-h-[250px] max-h-[300px] w-full'
              alt='image'
            />
          </div>
        ) : (
          <Link
            data-aos='flip-up'
            key={index}
            to={dataBox.link}
            className='flex flex-col items-center justify-center w-full text-white transition-all rounded bg-blu-logo/90 hover:scale-105 min-h-[200px]'
          >
            <h2 className='h2'>{dataBox.title}</h2>
            <p className='underline'>{t("scopri_di_piu")}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default BoxImages
