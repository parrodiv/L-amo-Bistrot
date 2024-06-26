import React from 'react'
import { Link } from 'react-router-dom'
import { heroData } from '../../data'
import { useTranslation } from 'react-i18next'


const HeroTitle = () => {

  const { t } = useTranslation()
  return (
    <div
      id='titolo'
      className='absolute top-0 z-40 flex items-center justify-center w-full min-h-screen mx-auto text-white '
    >
      <h1 className='hidden'>L'Amo Bistrot a Gargnano</h1>
      {/* Text */}
      <div className='flex flex-col items-center text-center animate__animated animate__backInDown'>
        <div>
          <img src={heroData.img} alt="L'amo Bistrot" />
        </div>
        <div>
          <Link to='contact/#reservation'>
            <button className='btnCustom animate__animated animate__heartBeat animate__delay-1s'>
              {t("prenota_un_tavolo")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroTitle
