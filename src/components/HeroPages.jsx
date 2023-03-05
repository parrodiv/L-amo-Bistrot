import React, { useEffect } from 'react'
import GalleryImages from './FoodDrinkPage/GalleryImages'
import ContactInfo from './ContactPage/ContactInfo'
import TextFragment from './Layout/TextFragment'

import foodBg from '../assets/img/boxImagesHome/food.jpeg'
import drinkBg from '../assets/img/boxImagesHome/drinks.jpeg'
import contactBg from '../assets/img/boxImagesHome/contact.jpeg'

const HeroPages = ({ page }) => {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${
      page === 'food' ? foodBg : page === 'drink' ? drinkBg : contactBg
    })center center`,
    backgroundSize: 'cover',
  }
  return (
    <>
      <div
        style={{ ...style }}
        className={
          page === 'food'
            ? 'min-h-[50vh]  relative flex flex-col justify-center items-center'
            : page === 'drink'
            ? 'min-h-[50vh]  h-full relative flex flex-col justify-center items-center'
            : 'min-h-[100vh] relative flex flex-col justify-center items-center'
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
            titleFood='E’ una storia d’amore la cucina. Bisogna innamorarsi dei prodotti e poi delle persone che li cucinano'
            titleDrink='Il suono morbido di un sughero che viene stappato dalla bottiglia ha il suono di un uomo che sta aprendo il suo cuore.'
          />
          <GalleryImages page={page} />
        </>
      )}
    </>
  )
}
// <ContactInfo />

export default HeroPages
