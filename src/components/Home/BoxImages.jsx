import React from 'react'
import { Link } from 'react-router-dom'

import { boxImagesHomeData } from '../../data'

const BoxImages = () => {
  return (
    <div className='grid w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-3'>
      {boxImagesHomeData.map((dataBox, index) => {
        return dataBox.hasOwnProperty('img') ? (
          <div key={index} classname='w-full rounded'>
            <img
              src={dataBox.img}
              className='object-cover lg:max-h-[250px] max-h-[300px] w-full'
              alt='image'
            />
          </div>
        ) : (
          <Link
            key={index}
            to={dataBox.link}
            className='flex flex-col items-center justify-center w-full text-white transition-all rounded bg-blu-logo hover:scale-105 hover:opacity-80 min-h-[200px]'
          >
            <h2 className='h2'>{dataBox.title}</h2>
            <p className='underline'>{dataBox.text}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default BoxImages
