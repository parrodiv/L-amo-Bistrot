import React from 'react'
import { Link } from 'react-router-dom'

import { boxImagesHomeData } from '../../data'

const BoxImages = () => {
  return (
    <div class='w-full grid grid-cols-1 lg:grid-cols-3 gap-0 mx-auto'>
      {boxImagesHomeData.map((dataBox) => {
        return dataBox.hasOwnProperty('img') ? (
          <div classname='w-full rounded'>
            <img src={dataBox.img} className='object-cover lg:max-h-[250px] max-h-[300px] w-full' alt='image' />
          </div>
        ) : (
          <Link
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
