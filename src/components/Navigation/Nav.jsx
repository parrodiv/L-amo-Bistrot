import React from 'react'
import { Link } from 'react-router-dom'

import { navData } from '../../data'

const Nav = ({nav, setNav}) => {



  return (
    <nav className='w-full h-full'>
      <ul className='flex flex-col items-center justify-center h-full gap-y-6'>
       {navData.map((item, index) => (
        <li key={index}>
          <Link to={item.href} className="text-xl italic capitalize transition-all font-primary hover:text-black"
          onClick={() => setNav(!nav)}>
            {item.name}
          </Link>
        </li>
       ))}
      </ul>
    </nav>
  )
}

export default Nav
