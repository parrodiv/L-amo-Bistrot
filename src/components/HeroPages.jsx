import React, { useEffect } from 'react'
import GalleryImages from './FoodDrinkPage/GalleryImages'
import ContactInfo from './ContactPage/ContactInfo'
import TextFragment from './Layout/TextFragment'

import foodBg from '../assets/img/foodPage/image00140_optimized.jpeg'
import drinkBg from '../assets/img/drinkPage/photo_2023-03-25_15-59-07_optimized.jpg'
import contactBg from '../assets/img/boxImagesHome/location.jpeg'
import { useTranslation } from 'react-i18next'

import { textFragments } from '../data'

const HeroPages = ({ page }) => {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${
      page === 'food' ? foodBg : page === 'drink' ? drinkBg : contactBg
    })center center`,
    backgroundSize: 'cover',
  }

  const { t } = useTranslation()

  return (
    <>
      <div
        style={{ ...style }}
        className={
          page === 'food'
            ? 'min-h-[50vh]  relative flex flex-col justify-center items-center animate__animated animate__fadeIn'
            : page === 'drink'
            ? 'min-h-[50vh]  h-full relative flex flex-col justify-center items-center animate__animated animate__fadeIn'
            : 'min-h-[100vh] relative flex flex-col justify-center items-center animate__animated animate__fadeIn'
        }
      >
        {' '}
        {page === 'contact' && (
          <>
            <h1 className='mt-[10rem] text-white h1'>{page}</h1>
            <ContactInfo />
          </>
        )}
        {page !== 'contact' && (
          <>
            <h1 className='mt-5 text-white h1'>{page}</h1>
          </>
        )}
      </div>

      {page !== 'contact' && (
        <>
          <TextFragment
            page={page}
            textFood={t('fragment_food')}
            textDrink={t('fragment_drink')}
          />
          <GalleryImages page={page} />
        </>
      )}
    </>
  )
}
// <ContactInfo />

export default HeroPages
