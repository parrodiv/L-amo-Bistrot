import React, { useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

import foodImgs, { drinkImgs } from '../../data'

console.log(drinkImgs)


const images = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    width: 300,
    height: 200,
    isSelected: true,
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 300,
    height: 200,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    alt: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 300,
    height: 200,
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 300,
    height: 200,
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212,
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 300,
    height: 200,
  },
]

const GalleryImages = ({ page }) => {
  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <Gallery>
          {page === 'food'
            ? foodImgs.map((src) => (
                <Item original={src} thumbnail={src} width='1000' height='650'>
                  {({ ref, open }) => (
                    <img
                      style={{ cursor: 'pointer' }}
                      ref={ref}
                      onClick={open}
                      src={src}
                      className='min-w-[100px] min-h-[50px] w-full h-full'
                    />
                  )}
                </Item>
              ))
            : drinkImgs.map((src) => (
                <Item original={src} thumbnail={src} width='450' height='600' >
                  {({ ref, open }) => (
                    <img
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
