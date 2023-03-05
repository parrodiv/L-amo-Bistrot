import React from 'react'

import {HiOutlineMenuAlt2} from 'react-icons/hi'

const MenuButton = ({nav, setNav}) => {
  return (
    <div>
     <HiOutlineMenuAlt2 className='z-50 text-3xl text-white cursor-pointer' onClick={() => setNav(!nav)}/>
    </div>
  )
}

export default MenuButton
