import React, { useEffect } from 'react'

import HeroPages from '../components/HeroPages'

const Food = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <HeroPages page='food' />
}

export default Food
