import React from 'react'

import { navData } from '../../data'

const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='flex flex-col items-center justify-center h-full gap-y-6'>
       {navData.map((item, index) => (
        <li key={index}>
          <a href={item.href} className="text-xl italic capitalize transition-all font-primary hover:text-black">
            {item.name}
          </a>
        </li>
       ))}
      </ul>
    </nav>
  )
}

export default Nav
