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
      <div className='grid grid-cols-2 lg:grid-cols-4'>
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
                      className='w-[15rem] h-[10rem] md:min-w-[20rem] md:max-h-[17rem] md:w-full md:h-full object-cover'
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
