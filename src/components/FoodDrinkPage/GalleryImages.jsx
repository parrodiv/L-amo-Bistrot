import React, { useEffect } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import foodImgs, { drinkImgs } from '../../data'

console.log(drinkImgs)

const GalleryImages = ({ page }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <div className='grid grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4'>
        <Gallery>
          {page === 'food'
            ? foodImgs.map((src) => (
                <Item original={src} thumbnail={src} width='1000' height='700'>
                  {({ ref, open }) => (
                    <img
                      data-aos='fade-up'
                      style={{ cursor: 'pointer' }}
                      ref={ref}
                      onClick={open}
                      src={src}
                      className='w-[15rem] h-[10rem] md:w-[22rem] md:h-[17rem] object-cover mx-auto'
                      alt="L'Amo Bistrot"
                    />
                  )}
                </Item>
              ))
            : drinkImgs.map((src) => (
                <Item original={src} thumbnail={src} width='450' height='600'>
                  {({ ref, open }) => (
                    <img
                      data-aos='fade-up'
                      style={{ cursor: 'pointer' }}
                      ref={ref}
                      onClick={open}
                      src={src}
                      className='min-w-[100px] min-h-[50px] w-full h-full'
                      alt="L'Amo Bistrot"
                    />
                  )}
                </Item>
              ))}
        </Gallery>
      </div>
    </div>
  )
}

export default GalleryImages
