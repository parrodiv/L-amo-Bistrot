import React from 'react'
import { socialData } from '../data'
import { ExternalLink } from 'react-external-link'

const Social = () => {
  return (
    <div className='flex flex-col'>
      {socialData.map((item, index) => (
        <ExternalLink
          key={index}
          href={item.href}
          className=' border-giallo-logo/20 border-4 rounded-full w-[40px] h-[40px] flex items-center justify-center hover:text-giallo-logo text-xl md:text-2xl transtition-all'
        >
          {item.icon}
        </ExternalLink>
      ))}
    </div>
  )
}

export default Social
